interface User {
  readonly id: number;
  name: string;
  email: string;
  phone?: number;
}

const user1: User = {
  id: 1,
  name: "Manrit",
  email: "man@gmail.com",
  phone: 22434,
};
const user2: User = {
  id: 2,
  name: "Sanrit",
  email: "San@gmail.com",
};

// user1.id=32 - throws error - cuz id is readonly property - and can not be re-assigned
// console.log(user1);
// console.log(user2);

// -------------------------------------
// 4. Function Inside Interface
// Create an interface Product:
// name → string
// price → number
// getDiscountedPrice(discount: number): number
// Implement an object using it.

interface Product {
  name: string;
  price: number;
  getDiscountPrice(discount: number): number;
}

const Laptop: Product = {
  name: "Dell laptop",
  price: 300000,
  getDiscountPrice(discount) {
    return this.price - discount;
  },
};

const finalPrice = Laptop.getDiscountPrice(3000)

// console.log(finalPrice)

// ------------------------------------
// Create an interface MathOperation that represents a function:
// Takes two numbers
// Returns a number
// Use it to implement:
// add
// multiply

interface MathOperation{
    (a: number, b: number): number
}
const add : MathOperation =(a, b) =>{
    return a+b
}
const multiply : MathOperation = (a,b) =>{
    return a*b
}
// console.log(add(5,4))
// console.log(multiply(5,4))

// --------------INTERFACE INHERITANCE----------------------
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeID: number;
  salary: number;
}

const emp1: Employee = {
  name: "Manrit",
  employeeID: 121,
  salary: 23456789,
};
// console.log(emp1)

// ----------------MULTIPLE INHERITANCE------------------
interface Driver {
  drive(): void;
}
interface Coder {
  code(): void;
}

interface TechDriver extends Driver, Coder{
    name : string
}

const TD : TechDriver ={
    name : "MANRIT",
    drive() {
        console.log("MANRIT can drive fast and safe...")
    },
    code() {
        console.log("MANRIT can code efficiently...")
    },
}

// console.log(TD)
// TD.code()
// TD.drive()
