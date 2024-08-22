function myFunction() {
  //   document.getElementById("panel").style.display = "none";
  //   document.getElementById("panel").style.display = "block";
  var mybutton = document.getElementById("panel");
  var displaySetting = mybutton.style.display;
  var panel = document.getElementById("panel");
  if (displaySetting == "block") {
    mybutton.style.display = "none";

    panel.innerHTML = "show";
  } else {
    mybutton.style.display = "block";

    panel.innerHTML = "Hide 😀";
  }
}
