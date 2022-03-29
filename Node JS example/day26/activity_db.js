let express=require('express');
let cors=require('cors');
let mongoClient=require('mongodb').MongoClient;
let parser=require('body-parser');
const { response } = require('express');

let app=express();

let dbURL="mongodb://localhost:27017";

let port=3001;

app.listen(port,()=>console.log(`Server is running at port ${port}`));

app.use(parser.json());
app.use(cors());

app.get('/emp',(request,response)=>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('mydb');
        let cursor=db.collection('crud_activity').find();
        let emp=[];
        cursor.forEach((doc,err)=>{
            if(err) throw err;
            emp.push(doc);
        },()=>{
            response.json(emp);
            client.close();
        });
    });
});

app.post('/emp',(request,response)=>{
    let data=request.body;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('mydb');
        db.collection('crud_activity').insertOne(data,(err,result)=>{
            if(err) {
                response.status(409).json({"msg":`Employee with an id ${data} exists`});
            }
            response.status(201).json(result);
            client.close();

        });
    });
});

app.get('/emp/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('mydb');
        db.collection('crud_activity').findOne({_id:id})
        .then((result)=>{
            if(result!=null){
                response.json(result);
            } else{
                response.status(404).json({'msg':`Sorry ${id} doesn't exits`})
            }
            client.close();
        });
    });
});

app.delete('/emp/:id',(request,response)=>{
    let id=parseInt(request.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('mydb');
        db.collection('crud_activity').deleteOne({_id:id})
        .then((result)=>{
            response.json(result);
            client.close();
        });
    });
});
// Update city from object address
app.put('/emp/:id/:city',(request,response)=>{
    let id=parseInt(request.params.id);
    let city=request.params.city;
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error) throw error;
        let db=client.db('mydb');
        db.collection('crud_activity').updateOne({_id:id},{$set:{"address.city":city}})
        .then((result)=>{
            if(result.matchedCount!=0){
                response.json(result);
            } else{
                response.json({'msg':`Selected id ${id} is not found`})
            }
            client.close();
        });
    });
});