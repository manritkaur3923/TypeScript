// forceful type assertion
let response: any = "23";

let reslen: number = (response as string).length;
console.log(reslen);
// -----
type car = {
  name: string;
};

let carName = '{"name" : "BMW"}';
let carObject = JSON.parse(carName) as car;

console.log(carObject);

// let val = null
// console.log(val.length)

// Rest parameters
function joinNumbers(...nums: Number[]) {
    return nums.join("-")
}
console.log(joinNumbers(1,3,4,5,2))
