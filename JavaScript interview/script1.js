console.log("Global Execution Context start");
var globalVar = "i am a global variable";

console.log(globalVar);
globalFun();
console.log("Global Execution Context end");
function globalFun() {
  console.log("inside global function");
}
