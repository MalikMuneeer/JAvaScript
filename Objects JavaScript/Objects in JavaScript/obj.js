// let lecture = 10;
// let section = 3;
// let title = "Javascript";
// const course = {  // object
//   lecture: 10,  // propersties
//   section: 3,
//   title: "Javascript",
//   notes: {     // nested object
//     introduction: "Welcome to our JavaScript Course",
//   },
//   enroll() {   // method
//     console.log("you are Sucessfully enrolled");
//   },
// };
// course.enroll(); // object ka name likh . ju b call karwana ho
// console.log(course);
// course.price = 999;
//--------------------------Factory Function-----------------
// function CreateCourse() {
//   const course = {  // course repeat ho rha ha return mee
//     lecture: 10,
//     section: 3,
//     title: "JavaScript",
//     notes: {
//       introduction: "Welcome to our JavaScript Course",
//     },
//     enroll() {
//       console.log("you are Sucessfully enrolled");
//     },
//   };
//   return course;
// }
// const course = CreateCourse();
// course.enroll()
//=====================================================
// function CreateCourse(title) {
//   return {  yaha repeat nh ho rha yee best method ha
//     title: title,
//     enroll() {
//       console.log("You are sucfully enrolled");
//     },
//   };
// }
// const course = createCourse("JavaScript");
// course.enroll();
// console.log(course);
//==========================================Constructor====================
function Course(title) {
  (this.title = title), //constructor mee this.properties name likhty han R this keyword function ko represent karta ha /
    (this.enroll = function () {
      // construstor function
      console.log("You are succefully enrolled");
    });
}
// const course = new Course("JavaScripe"); // new keyword this ko point karta ha R atomatically return karwa deta ha
course.enroll();

const Course_1 = new Function( //Function b 1 object hi hota ha
  "title",
  `this.title = title,
this.enroll = function () { 
  console.log("You are succefully enrolled");  
}
`
);
// const course_2 = new Course_1("JavaScript");
// course_2.enroll();

//Primitive Datatype
// let number = 10;
//Pass by value
// let number_2 = number;
// number = 15;
// // console.log(number);
// // console.log(number_2);
// //Refrence Datatype
// let obj = { number: 10 };
// //Pass by refernce
// let obj2 = obj;
// obj.number = 15;
// console.log(obj);
// console.log(obj2);

//For in Loop
const course = {
  title: "Javascript",
  enroll() {
    console.log("You are succefully enrolled");
  },
};
//Values and pairs 1 eek kar k bahir A jaty han
// const course_1={...course}
// course_1.title="C++" // title update ho rha ha
// const course_1= Object.assign({},course)
// course_1.title="C++"
//for in loop
for (let key in course) {
  // key course k andar ju b key ho gii like yaha 1 key title ha R 1 enroll wo 2no
  // show ho jai gii
  console.log(key, course[key]);
}
//for of loop
const course_1 = {};
for (let key of Object.keys(course)) {
  course_1[key] = course[key];
}
