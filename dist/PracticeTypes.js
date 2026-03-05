// ----------------------------------------------
// 1. Write a function formatPrice that:
// takes a price (number)
// takes an optional currency (string)
// returns "₹100" if currency not provided
// returns "USD 100" if provided
// ANSWER
function formatPrice(currency) {
    if (typeof currency === "string") {
        return `${currency}`;
    }
    return "Rs100";
}
const student = [
    {
        id: 1,
        name: "Manrit",
        isActive: true,
    },
    {
        id: 2,
        name: "Sanreet",
        isActive: false,
    },
    {
        id: 3,
        name: "Taranpreet",
        isActive: true,
    },
];
function showActiveStudents(students) {
    return students.filter((stu) => stu.isActive === true).map((stu) => stu.name);
}
// console.log(student);
// console.log(showActiveStudents(student));
// ---------------------------------------
// 3. Create a function printId that accepts:
// number OR string
// If number → multiply it by 10
// If string → return it in uppercase
// Use type narrowing.
// ANSWER
function printID(id) {
    if (typeof (id) === "string") {
        return id.toUpperCase();
    }
    return id * 10;
}
function getDashboard(user) {
    if (user.role === "admin") {
        return `Welcome ${user.name} to Admin Dashboard`;
    }
    return `Welcome ${user.name} to User Dashboard`;
}
// console.log(getDashboard({
//   name: "pooja",
//   email: "email@com",
//   role: "user",
// }));
let login = {
    name: "Mani",
    email: "email@com",
    role: "admin",
};
// console.log(getDashboard(login));
// ------------------------------------------
// 5. Create a function:
// handleInput(input: unknown)
// If input is:
// string → return string length
// number → return square
// otherwise → return "Invalid Input"
// Use type guards.
// Answer
function handleInput(input) {
    if (typeof (input) === "string") {
        return input.length;
    }
    else if (typeof (input) === "number") {
        return input * input;
    }
    else {
        return "Invalid Input";
    }
}
function isCar(vehicle) {
    return "speed" in vehicle;
}
function getInfo(vehicle) {
    if (isCar(vehicle)) {
        console.log(`Brand name - ${vehicle.brand} with ${vehicle.speed} km/h`);
    }
    else {
        console.log(`Brand Name - ${vehicle.brand} with${vehicle.hasGear ? "" : "No"} Gears`);
    }
}
function isCardPayment(payment) {
    return "cardNumber" in payment;
}
function MakePayment(payment) {
    if (isCardPayment(payment)) {
        return `Processing Card Payment ending with ${payment.cardNumber}`;
    }
    else {
        return `Processing UPI payment with UPI ID ${payment.upiId}`;
    }
}
const upi = {
    method: "UPI",
    upiId: "man2@45"
};
const card = {
    method: "card",
    cardNumber: 43423,
    cvv: 234
};
// function isErrorResponse(response: Response): response is ErrorResponse {
//   return "message" in response;
// }
// function handleResponse(response:Response) {
//   if(isErrorResponse(response)){
//     return `Response : ${response.status} with message${response.message}`
//   }
//   else{
//     return `Response : ${response.status} with data : ${response.data}`
//   }
// }
function handleResponse(response) {
    if (response.status === "Error") {
        return `Response : ${response.status} with message${response.message}`;
    }
    else {
        return `Response : ${response.status} with data : ${response.data.join(", ")}`;
    }
}
const error = {
    status: "Error",
    message: "Error Aa gya ooyyeeee!"
};
const success = {
    status: "Success",
    data: ["Man", "beer"]
};
export {};
// console.log(handleResponse(error))
// console.log(handleResponse(success))
//# sourceMappingURL=PracticeTypes.js.map