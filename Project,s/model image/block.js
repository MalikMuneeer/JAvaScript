=================================JAVASCRIPT==========================
window.addEventListener("load", function () {
  let block = this.document.getElementById("block");
  let scaleCoef = 1;
  let rotateDeg = 0;
  //POS Y manipulation
  let posY = this.document.getElementById("pos-y");
  posY.addEventListener("input", function () {
    block.style.top = posY.value + "px";
  });
  //POS X manipulation
  let posX = this.document.getElementById("pos-x");
  posX.addEventListener("input", function () {
    block.style.left = posX.value + "px";
  });
});
