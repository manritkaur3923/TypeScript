// --------CLASSES---------
// 1. Create a Simple Class
// Create a class User with:
// id
// name
// Add a constructor to initialize them.
// Create an object and print the values.
// add a method to get details to user too.

class User {
    id : number;
    name : string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }

    getDetails(): string{
        return `User: ${this.name}(ID: ${this.id})`
    }
}

const u1 = new User(1, "mohit")
// console.log(u1.id, u1.name)
// console.log(u1.getDetails())

// -------------------------

class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): string {
    return `Hey~~ I'm ${this.name} and I'm ${this.age} old `;
  }
  hasBirthday(): void {
    this.age = this.age + 1;
  }
  changeName(newName: string): void {
    this.name = newName;
  }
}
const s1 = new Student("Pooja", 21);
const s2 = new Student("Mohini", 19);
// console.log(s1.age);
// console.log(s1.name);
// console.log(s1.introduce());
// s1.hasBirthday();
// console.log(s2.introduce());
// console.log(s1.introduce());
// console.log(s2.hasBirthday());
// console.log(s2.introduce());
// s1.changeName("Vanshika")
// console.log(s1.introduce());

// --------------------
class Book {
    title : string;
    author: string;
    price: number;

    constructor(title : string, author : string, price: number){
        this.author = author
        this.title = title
        this.price=price
    }
    getBookInfo(): string{
        return `${this.title} by ${this.author} costs ${this.price}`
    }
}

const b1 = new Book("Atomic Habits", "James Clear", 499)

// console.log(b1.getBookInfo())

// -----------Class with Calculation---------------
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
    // console.log(this)  // this refers to the recent object created
  }
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number{
    return 2*(this.width + this.height)
  }
}

const r1 = new Rectangle(2.2,4.3)
// console.log(r1.getArea())
// console.log(r1.getPerimeter())

// ---------ACCESS MODIFIER-------------

// 2. Use private
// Create a class BankAccount:
// accountNumber → public
// balance → private
// Add methods:
// deposit(amount)
// getBalance()
// Try accessing balance directly (should fail).

class BankAccount {
  public accNumber: number = 3009;
//   private balance: number = 100; 
  #balance: number = 100; //real privacy

  constructor() {}

  deposit(amount: number) {
    this.#balance = this.#balance + amount;
  }

  getBalance(): number {
    return this.#balance;
  }
}

const ba = new BankAccount();
// console.log(ba.getBalance())
// ba.deposit(300)
// console.log(ba.getBalance())

// -----3. Use protected -----------
// Create a base class Person:
// protected age
// Create a child class Employee that can access age and print it.

class Person{
    protected age : number;
    constructor(age : number){
        this.age = age
    }
}
class Employee extends Person{
    constructor(age:number){
        super(age) //calls the parent constructor
    }
    printAge(){
        return `Age of Employee ${this.age}`
    }
}

const e1 = new Employee(34)

// console.log(e1.printAge())