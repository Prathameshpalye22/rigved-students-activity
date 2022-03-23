let read=require('readline-sync');
let fs=require('fs');
let id=read.question('Enter your id: ');
let name=read.question('Enter your name: ');
let salary=read.question('Enter your salary: ');
let employee={i:id, n:name, sal:salary};
let jsonString=JSON.stringify(employee);
fs.writeFileSync('employee1.json', jsonString);
console.log('Done...');