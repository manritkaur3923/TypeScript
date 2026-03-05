const user1 = {
    id: 1,
    name: "Manrit",
    email: "man@gmail.com",
    phone: 22434,
};
const user2 = {
    id: 2,
    name: "Sanrit",
    email: "San@gmail.com",
};
const Laptop = {
    name: "Dell laptop",
    price: 300000,
    getDiscountPrice(discount) {
        return this.price - discount;
    },
};
const finalPrice = Laptop.getDiscountPrice(3000);
const add = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
const emp1 = {
    name: "Manrit",
    employeeID: 121,
    salary: 23456789,
};
const TD = {
    name: "MANRIT",
    drive() {
        console.log("MANRIT can drive fast and safe...");
    },
    code() {
        console.log("MANRIT can code efficiently...");
    },
};
export {};
// console.log(TD)
// TD.code()
// TD.drive()
//# sourceMappingURL=PracticeInterface.js.map