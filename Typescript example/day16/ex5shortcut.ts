class Student {
    constructor(public name : string, public age : number) {}
    display(): void {
        document.write(`<p>Name: ${this.name}, Age: ${this.age}`)
    }
}
let s1 = new Student("Tushar", 42);
s1.display();