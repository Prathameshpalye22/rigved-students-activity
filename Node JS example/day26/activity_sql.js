let mysql=require('mysql');
let express=require('express');
let app=express();
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Root@123",
    database: "rigved_db"
});
let port=3005;
let parser=require('body-parser');

app.listen(port,()=>console.log(`Server is running at port ${port}`));
con.connect((error)=>{
    if(error) throw error;
    console.log('Connected!')
});

app.use(parser.json());
app.post('/emp',(request,response)=>{
   let object=request.body;
   console.log(object);
   con.query('insert into employe values('+mysql.escape(object.id)+','+mysql.escape(object.name)+','+mysql.escape(object.salary)+');',(err,result)=>{
       if(err) throw err;
       response.json(result);
   }); 
});

app.get('/emp',(request,response)=>{  
        con.query(("select * from employe"),(err,result)=>{
            if(err) throw err;
            console.log(result);
            response.json(result);
        })
    })

app.get('/emp/:id',(request,response)=>{
    let id=request.params.id;
    
        con.query("select * from employe where id="+mysql.escape(id),(err,result)=>{
            if (err) throw err;
            response.json(result);
        })
    
});

app.put('/emp/:id/:name',(request,response)=>{
    let id=request.params.id;
    let name=request.params.name;
    con.query('update employe set name='+mysql.escape(name)+' where id='+mysql.escape(id),(err,result)=>{
        if(err) throw err;
        response.json(result);
    });
});

app.delete('/emp/:id',(request,response)=>{
    let id=request.params.id;
    con.query('delete from employe where id='+mysql.escape(id),(err,result)=>{
        if(err) throw err;
        response.json(result);
    });
});