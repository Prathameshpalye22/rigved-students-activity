function sum1(x, ...y){
    let result=x;
    for(let i of y){
        result=result+i;
    }
    return result;
}
function sum2(x: number, ...y: number[]):number{
    let result =x;
    for(let i of y){
        result=result+i;
    }
    return result;
}
let r = sum1(10, "30", "20", 40);
document.write(`<p>Result = ${r}</p>`);
 r= sum2(20, 40, 30, 10);
document.write(`<p>Result =${r}</p>`);