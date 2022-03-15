class Emp{
    private readonly id: number;
    private name: string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
    public display() :void{
        document.write(`<p>Id: ${this.id}, Name: ${this.name}</p>`);
    }
    public getId() : number{
        return this.id;
    }
    public setName(name:string) :void {
        this.name=name;
    }
}
let e1 = new Emp(101, "Ranveer");
let e2 = new Emp(102, "Raju");
e1.display();
e2.display();