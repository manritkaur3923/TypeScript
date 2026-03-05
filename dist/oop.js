// --------CLASSES---------
// 1. Create a Simple Class
// Create a class User with:
// id
// name
// Add a constructor to initialize them.
// Create an object and print the values.
// add a method to get details to user too.
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `User: ${this.name}(ID: ${this.id})`;
    }
}
const u1 = new User(1, "mohit");
// console.log(u1.id, u1.name)
// console.log(u1.getDetails())
// -------------------------
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hey~~ I'm ${this.name} and I'm ${this.age} old `;
    }
    hasBirthday() {
        this.age = this.age + 1;
    }
    changeName(newName) {
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
    title;
    author;
    price;
    constructor(title, author, price) {
        this.author = author;
        this.title = title;
        this.price = price;
    }
    getBookInfo() {
        return `${this.title} by ${this.author} costs ${this.price}`;
    }
}
const b1 = new Book("Atomic Habits", "James Clear", 499);
// console.log(b1.getBookInfo())
// -----------Class with Calculation---------------
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.height = height;
        this.width = width;
        // console.log(this)  // this refers to the recent object created
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const r1 = new Rectangle(2.2, 4.3);
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
    accNumber = 3009;
    //   private balance: number = 100; 
    #balance = 100; //real privacy
    constructor() { }
    deposit(amount) {
        this.#balance = this.#balance + amount;
    }
    getBalance() {
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
class Person {
    age;
    constructor(age) {
        this.age = age;
    }
}
class Employee extends Person {
    constructor(age) {
        super(age); //calls the parent constructor
    }
    printAge() {
        return `Age of Employee ${this.age}`;
    }
}
const e1 = new Employee(34);
export {};
// console.log(e1.printAge())
//# sourceMappingURL=oop.js.map