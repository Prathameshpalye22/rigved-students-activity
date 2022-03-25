let express = require('express');
let app = express();
app.listen(3003, () => console.log('Server is running in 3003'));
app.get('/', (request, response)=> {
    response.send('Hello World....');
});
app.get('/employee', (request, response)=> {
    let emp ={id: 100, name: "Vijay", salary: 32000};
    response.json(emp);
});
app.get('/employees', (request,response)=> {
    let employeeArray =[
        {id: 101, name: "Vijay", salary: 35000},
        {id: 102, name: "Manu", salary: 45000},
        {id: 103, name: "Ajay", salary: 40000}
    ];
    response.json(employeeArray);
});