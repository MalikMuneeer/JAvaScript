function callMe(event) {
  console.log(event.type);
  console.log(event.currentTarget);
  console.log(event.clientY);
  console.log(event.clientX);
  alert("Hi my name is Muneer Hussain");
}
clickbtn.addEventListener("click", callMe);
// clickbtn.onclick = addEventListener("click", function () {
//   alert("thanks");
// });

// clickbtn.onclick = removeEventListener("click", Callme);
