// type inference 
let name = "Manrit";
// name =43 
// type annotation 
let age = 45;
function details(name, age) {
    return `Your name is ${name} and age is ${age}`;
}
console.log(details(name, age));
// Union and Any
let status = "completed";
console.log(status);
status = "failed";
console.log(status);
let anyType;
anyType = 43;
console.log(anyType);
anyType = "pooja";
console.log(anyType);
export {};
//# sourceMappingURL=TypesInTS.js.map