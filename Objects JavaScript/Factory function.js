let title = "JavaScript";
let lecture = 10;

// function createCourse() {
//   return {
//     lecture: 10,
//     section: 3,
//     title: "JavaScript",
//     notes: {
//       introduction: "Wellcome to Alright Tech",
//     },
//     enroll() {
//       console.log("you are sucessfully enrolled");
//     },
//   };
// }
// const course = createCourse();
// course.enroll();

function createCourse(title) {
  return {
    title: title,

    enroll() {
      console.log("you are sucessfully enrolled");
    },
  };
}
const Course = createCourse("JavaScript");

course.enroll();
console.log(course);
