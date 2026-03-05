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
const user1 = {
    id: 1,
    name: "Manrit",
    email: "man@gmail.com",
    isAdmin: true,
};
const user2 = {
    id: 2,
    name: "Sanreet",
    email: "san@gmail.com",
    isAdmin: false,
};
function printUser(user) {
    console.log(`${user.isAdmin ? "Admin" : "User"}: ${user.name}`);
}
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - product.discount;
    }
    else
        return product.price;
}
const p1 = {
    id: 1,
    name: "dell X10",
    price: 230000,
    discount: 4000
};
const p2 = {
    id: 1,
    name: "Acer X10",
    price: 240000,
};
const emp1 = {
    name: "Pearl",
    age: 21,
    empId: "p11",
    salary: 30000000
};
// console.log(emp1.empId, emp1.name, emp1.age, emp1.salary)
// ----GENERIC PRACTICE-----
// Create a generic function:
// function identity<T>(value: T): T
// It should simply return the value.
// Test it with:
// number
// string
// array
function identity(value) {
    console.log(typeof value);
    return value;
}
// console.log(identity(34))
// console.log(identity("Pearl"))
// console.log(identity(["manrit", "pearl"]))
// -----Generic Array Wrapper------
function wrapInArray(value) {
    return [value];
}
const UserRes = {
    status: true,
    data: {
        id: 3,
        name: "Manrit",
        email: "man@gmail.com",
        isAdmin: true,
    },
};
const NumRes = {
    status: false,
    data: [1, 2, 4, 4, 6, 8]
};
// console.log(UserRes.data.name)
// console.log(NumRes.data)
// ----Constrained Generic-----
function getLength(item) {
    return item.length;
}
export {};
// console.log(getLength([2,3,2,6]))
// console.log(getLength(["a", "hello"]))
// console.log(getLength("hello"))
//# sourceMappingURL=Generics.js.map