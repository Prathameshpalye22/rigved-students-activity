let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let parser = require("body-parser");

let app = express();
let dbURL = "mongodb://localhost:27017";
let PORT = 3002;
app.listen(PORT, ()=> console.log(`Server running in ${PORT}`));
app.use(parser.json());
app.use(cors());
app.get("/users", (request, response)=> {
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
           throw error;
        let db = client.db("mydb");
        let cursor = db.collection("user").find();
        let users =[];
        cursor.forEach((doc, err) => {
            if(err)
                throw err;
            users.push(doc);
        }, ()=> {
            response.json(users);
            client.close();
        });
    });
});

app.post("/users", (request, response)=> {
    let userDocument = request.body;
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client)=> {
        if(error)
             throw error;
        let db = client.db("mydb");
        db.collection("user").insertOne(userDocument, (err, res)=> {
            if(err) {
                response.status(409).json({"message":`User with an id ${userDocument.id} exists`});
            }
            response.status(201).json(res);
            client.close();
        });
    });
});

app.get("/users/:id", (request, response)=> {
    let id = parserInt(request.params.id);
    mongoClient.connect(dbURL, {useNewUrlParser:true}, (error, client) => {
        if(error)
        throw error;
        let db = client.db("mydb");
        db.collection("user").findOne({_id:id})
        .then((doc)=>{
            if(doc != null) {
                response.json(doc);
            }else{
                response.status(404).json({"message":`Sorry ${id} doesn't exist`})
            }
            client.close();
        });
    });
});
app.delete('/users/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("mydb");
        db.collection("user").deleteOne({_id:id})
        .then((result)=>{
            response.json(result);
            client.close();
        })
    });
});
app.put('/users/:id/:age',(request,response)=>{
    let id=parseInt(request.params.id);
    let ageNew=parseInt(request.params.age);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db("mydb");
        db.collection("user").updateOne({_id:id},{$set:{age:ageNew}})
        .then((result)=>{
            response.json(result);
            client.close();
        })
    })
});