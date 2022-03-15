function test1(a: number, b?: number, c?: number) {
    document.write(`<p>a = ${a}, b = ${b}, c = ${c}</p>`);
}
test1(20);
test1(20, 30);
test1(20, 30, 40);
let user : {firstname: string, lastname?: string, phone: number};

user = {firstname: "Alex", phone: 123456789}
document.write(`<p>Name: ${user.firstname}, phone: ${user.phone}</p>`);