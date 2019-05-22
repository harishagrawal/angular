export class Product {
    
    // Define and initialize using TypeScript syntax
    constructor(public id:number, public name:string, public price:number, 
        public description:string, public ctgid:number){}
    
    /*
    // Standard way of defining and initializing

    // 1. define data members
    public id:number;
    public name:string;
    public price:number;
    public description:string;

    // initialize data members
    constructor(id:number, name:string, price:number, description:string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        console.log("id: ", this.id, "name: ", this.name, "price: ", this.price, "description: ", this.description )
    }

    */

}