let express = require("express");
let app = express();

let PORT_NO =3002
app.listen(PORT_NO, () => {console.log(`Express is running at ${PORT_NO}`)});
app.get('/', (request, response )=> {
    response.send('Requesting Get');
});

app.post('/', (request, response)=> {
    response.send('Requesting POST');
});

app.put('/', (request, response)=> {
    response.send('Requesting PUT');
});

app.delete('/',(request, response)=>{
    response.send('Requesting DELETE');
});
