let express=require('express');
let fs=require('fs');
let app=express();
app.listen(3002,()=>console.log('Server is running at 3002'));
app.get('/emp',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let jsonString=data.toString();
    let jsObject=JSON.parse(jsonString);
    response.jsonp(jsObject);
});