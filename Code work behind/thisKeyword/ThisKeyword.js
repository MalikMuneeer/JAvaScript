//================================================================================================================================
//THIS KEYWORDS
//Objects
// let Counter = createCounter();
// let Counter1 = createCounter();
// function createCounter() {
//   return {
//     count: 0,
//     increment: function () {
//       this.count++;
//       console.log(this); //target window object or Global object
//     },
//   };
// }
// Counter.increment();
// Counter1.increment();
// //=============================================================================
// //Without Object
// var count = 0;
// function incrementCounter() {
//   this.count++;
//   console.log(this); //target window object or Global object
// }
// incrementCounter();
// incrementCounter();
// incrementCounter();
// console.log(count);
//====================================================================================
// console.log(this);

function Car(name) {
  this.name = name;
  this.start = function () {
    console.log(this.name + "started");
    console.log(this);
  };
}
let swift = new Car("swift"); // idr sy agr maa new keyword remove kar doo tu Error A jai ga because ees k baad wo window mee save karwai ga tu phir hamy window ko target karwana ho ga

swift.start();
// console.log(this.name);
