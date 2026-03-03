// Question 1 — Basic Interface
// Create an interface called User with:
// id: number
// name: string
// email: string
// isAdmin: boolean
// Then:
// Create 2 users.
// Write a function printUser(user: User) that prints:
// Admin: Manrit
// OR
// User: Sanreet

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "Manrit",
  email: "man@gmail.com",
  isAdmin: true,
};
const user2: User = {
  id: 2,
  name: "Sanreet",
  email: "san@gmail.com",
  isAdmin: false,
};

function printUser(user: User): void {
  console.log(`${user.isAdmin ? "Admin" : "User"}: ${user.name}`);
}

// printUser(user1)
// printUser(user2)

// ------Interface With Optional Property-------
interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

function getFinalPrice(product : Product) : number{
    if(product.discount){
        return product.price - product.discount
    }
    else return product.price
}

const p1 = {
    id : 1,
    name: "dell X10",
    price : 230000,
    discount: 4000
}
const p2 = {
    id : 1,
    name: "Acer X10",
    price : 240000,
}

// console.log(getFinalPrice(p1))
// console.log(getFinalPrice(p2))

// -------Interface Extension-------
interface Person {
    name: string;
    age : number
}

interface Employee extends Person{
    empId : string
    salary: number
}

const emp1 : Employee ={
    name : "Pearl",
    age : 21,
    empId : "p11",
    salary : 30000000
}

// console.log(emp1.empId, emp1.name, emp1.age, emp1.salary)

// ----GENERIC PRACTICE-----
// Create a generic function:
// function identity<T>(value: T): T
// It should simply return the value.
// Test it with:
// number
// string
// array

function identity<T>(value : T) : T{
    console.log(typeof value)
    return value
}
// console.log(identity(34))
// console.log(identity("Pearl"))
// console.log(identity(["manrit", "pearl"]))

// -----Generic Array Wrapper------
function wrapInArray<T>(value : T) : T[] {
    return [value]
}

// console.log(wrapInArray(1))
// console.log(wrapInArray([1,2,3,4]))
// console.log(wrapInArray("hello"))


// ----Generic API Response-----
interface ApiResponse<T> {
  status: true | false;
  data: T;
}

const UserRes: ApiResponse<User> = {
  status: true,
  data: {
    id: 3,
    name: "Manrit",
    email: "man@gmail.com",
    isAdmin: true,
  },
};

const NumRes : ApiResponse<number[]> = {
    status : false,
    data : [1,2,4,4,6,8]
}

// console.log(UserRes.data.name)
// console.log(NumRes.data)

// ----Constrained Generic-----
function getLength<T extends {length : number}>(item : T) : number {
    return item.length
}

// console.log(getLength([2,3,2,6]))
// console.log(getLength(["a", "hello"]))
// console.log(getLength("hello"))
