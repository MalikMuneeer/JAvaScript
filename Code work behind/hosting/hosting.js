// sayHello();
// console.log(i);
// function sayHello() {
//   console.log("Hello");
// }
// // var i = 10;
// let i = 10; //let and const ES6 k sath introduce hovy thy us sy pahly serf var hota thaa.
// Een ki value hosted tu hoti han.Par jaab access karo gy tu error A jai ga.
// yee 1 TDZ k andar para ha
//=======================================================================
// sayHello();
// console.log(i);
// var sayHello = undefined; //.. Same Error
// // var sayHello = function () {
// //   console.log("Hello");
// // };
// var i = 10;
// idr error Ai ga sayHello is not a function because jaab haam function pahly call karwai gy
// tu  var sy jaab haam declare karwaty han tu yee undefined kar deta ha
///
// agr haam function baad mee call karwai gy tu yee run ho ga LIKE

// console.log(i);
// var sayHello = function () {
//   console.log("Hello");
// };

// sayHello();
// var i = 10;
//===============================================================
// Variable Scheduling
//===============================================================
// let foo = "bar";
// var bar = "foo";
// // if (true) {          // var ny box ko ignore kar dia
// //   let foo = "baz";
// //   var bar = "foobar";
// //   console.log(foo);
// //   console.log(bar);
// // }
//////////////////////////
// function say() {
//   let foo = "baz";
//   var bar = "foobar";
//   console.log(foo);
//   console.log(bar);
// }
/////////////////////////
// say();
// console.log(foo);
// console.log(bar);
//================================================================
// illigal scheduing
//================================================================
// let foo = "bar";
// var bar = "foo";
// if (true) {
//   // Error "foo" has already been declared WHY? Beacuse var bar k name sy variable agr local mee ha tu same name sy let/const sy variable global mee haam nh bna sakty
//   var foo = "baz";
//   var bar = "foobar";
//   console.log(foo);
//   console.log(bar);
// }

// console.log(foo);
// console.log(bar);
