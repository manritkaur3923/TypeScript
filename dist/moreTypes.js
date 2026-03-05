// forceful type assertion
let response = "23";
let reslen = response.length;
console.log(reslen);
let carName = '{"name" : "BMW"}';
let carObject = JSON.parse(carName);
console.log(carObject);
// let val = null
// console.log(val.length)
// Rest parameters
function joinNumbers(...nums) {
    return nums.join("-");
}
console.log(joinNumbers(1, 3, 4, 5, 2));
export {};
//# sourceMappingURL=moreTypes.js.map