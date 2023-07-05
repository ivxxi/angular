class Employee {
    // # makes it private
    #id: number;
    protected name: string;
    address: string;

    constructor( id:number, name:string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : string{
        return `${this.name} stays at ${this.address}`;
    }

    static getEmployeeCount(): number{
        return 40;
    }

    //get empId(): number {
    //    return this.#id;
    //}

    //set empId(id : number){
      //  this.#id = id;
    //}

   
}

let john = new Employee(1, "John", "Highway 71");
console.log(john);

//john.empId = 100; 
//console.log(john.empId);

let address = john.getNameWithAddress();
console.log(address);

//Employee.getEmployeeCount();

class Manager extends Employee{
        
    constructor(id:number, name:string, address:string){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
    
}

let mike = new Manager(2, 'Mike', "River Drive");
console.log(mike.getNameWithAddress());
