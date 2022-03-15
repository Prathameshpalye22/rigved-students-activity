interface A{
    name : string;
}
interface B{
    phone : number;
}
let obj1 : A & B;
obj1 ={name : "Deva", phone : 30000}
document.write(`<p>Name = ${obj1.name}, Phone = ${obj1.phone}</p>`)