let title = "JavaScript";
let lecture = 10;

function Course(title) {
  (this.title = title),
    (this.enroll = function () {
      console.log("You are sucessfully enrolled");
    });
}
const course = new Course("JavaScript");
delete course.title;
course.enroll();
console.log(course);
