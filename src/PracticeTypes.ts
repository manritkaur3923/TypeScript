// ----------------------------------------------
// 1. Write a function formatPrice that:
// takes a price (number)
// takes an optional currency (string)
// returns "₹100" if currency not provided
// returns "USD 100" if provided

// ANSWER
function formatPrice(currency? : unknown) {
  if (typeof currency === "string") {
    return `${currency}`;
  }
  return "Rs100";
}

// console.log(formatPrice());
// console.log(formatPrice("USD 343"));

// ----------------------------------------------
// 2. Create an array of students where each student has:
// id: number
// name: string
// isActive: boolean
// Write a function that returns only active students.

// ANSWER
type StudentDetails = {
  id: number;
  name: string;
  isActive: boolean;
};
const student: StudentDetails[] = [
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
function showActiveStudents(students: StudentDetails[]): string[] {
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
function printID(id: number | string) : string | number {
  if(typeof(id) === "string"){
    return id.toUpperCase()
  }
  return id*10
}
// console.log(printID(23));
// console.log(printID("manrit"));

// ----------------------------------------------
// 4. Create a User Type
// Make a User type:
// name: string
// email: string
// role: "admin" | "user"
// Write a function:
// getDashboard(user)
// If admin → return "Welcome Admin"
// If user → return "Welcome User"

// Answer
type user = {
  name: string;
  email: string;
  role: "admin" | "user";
};

function getDashboard(user: user): string {
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

let login: user = {
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
function handleInput(input:unknown) : unknown{
  if(typeof(input) === "string"){
    return input.length
  }
  else if (typeof(input)=== "number") {
    return input*input
  }
  else{
    return "Invalid Input"
  }
}
// console.log(handleInput("manrit"))
// console.log(handleInput(12))
// console.log(handleInput(true))

// ---------------------------------------
// 6. Create a Custom Type Guard
// Define two types:
// Car → brand, speed
// Bike → brand, hasGear (boolean)
// Write a function:
// isCar(vehicle): vehicle is Car
// Then create:
// getVehicleInfo(vehicle)
// If Car → print speed
// If Bike → print gear info

// Answer
type car = {
  brand: string;
  speed: number;
};

type bike = {
  brand: string;
  hasGear: boolean;
};

type Vehicle = car | bike;

function isCar(vehicle: Vehicle): vehicle is car {
  return "speed" in vehicle;
}

function getInfo(vehicle:Vehicle) {
  if(isCar(vehicle)){
    console.log(`Brand name - ${vehicle.brand} with ${vehicle.speed} km/h`)
  }
  else{
    console.log(`Brand Name - ${vehicle.brand} with${vehicle.hasGear ? "" : "No"} Gears`)
  }
}
// getInfo({
//   brand : "BMW",
//   speed : 300
// })
// getInfo({
//   brand : "Yahama",
//   hasGear : true
// })

// Another Question of same type
type CardPayment = {
  method : string,
  cardNumber : number ,
  cvv : number
}

type UpiPayment  = {
  method : string,
  upiId : string
}

type Payment = CardPayment | UpiPayment;

function isCardPayment( payment : Payment) : payment is CardPayment{
  return "cardNumber" in payment
}

function MakePayment(payment:Payment) {
  if(isCardPayment(payment)){
    return `Processing Card Payment ending with ${payment.cardNumber}`
  }else{
    return `Processing UPI payment with UPI ID ${payment.upiId}`
  }
}

const upi : UpiPayment = {
  method : "UPI",
  upiId : "man2@45"
}

const card : CardPayment = {
  method : "card",
  cardNumber : 43423,
  cvv : 234
}

// console.log(MakePayment(upi))
// console.log(MakePayment(card))

// -----------------------------------------
// 7. API Response Handling (VERY IMPORTANT)
// Simulate an API response type:
// type SuccessResponse = {
//   status: "success"
//   data: string[]
// }
// type ErrorResponse = {
//   status: "error"
//   message: string
// }
// Create a function:
// handleResponse(response)
// If success → loop through data
// If error → print message
// Use discriminated union narrowing.

// ANSWER
type SuccessResponse = {
  status: "Success";
  data: string[];
};

type ErrorResponse = {
  status: "Error";
  message: string;
};

type Response = SuccessResponse | ErrorResponse;

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

function handleResponse(response:Response) {
  if (response.status === "Error") {
    return `Response : ${response.status} with message${response.message}`
  } else {
    return `Response : ${response.status} with data : ${response.data.join(", ")}`
  }
}
const error: ErrorResponse = {
  status : "Error",
  message : "Error Aa gya ooyyeeee!"
}

const success : SuccessResponse ={
  status : "Success",
  data : [ "Man", "beer"]
}

// console.log(handleResponse(error))
// console.log(handleResponse(success))