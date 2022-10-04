// add event listener to all buttons
let allAboutBtns = document.getElementsByClassName("btn-about");
let allDescriptionTexts = document.getElementsByClassName("desc-text");
let testBox = document.getElementsByClassName("desc-boxes");

for (let i = 0; i < allAboutBtns.length; i++) {
  allAboutBtns[i].addEventListener("click", activeText);
}

// aboutBtn.addEventListener("click", activeText);

// 1. get all btns
// 2. get all boxes

function activeText(projectNumber) {
  console.log(this.value);
  testBox[this.value].classList.toggle("desc-active");

  //   console.log(this.value);
  //   allDescriptionTexts[this.value].classList.toggle("desc-active");
  // get value of THIS btn
  // activate class on for [this] text
}
