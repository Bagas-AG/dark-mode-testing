let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft ;
    
function darkMode() {
  if(darkRemainingLeft == 1){
    //info.textContent = "JATAH FITUR DARKMODE ANDA HABIS"
      return;
  }

  darkCounter += 1;
  let darkRemainingLeft = darkLimit - darkCounter;

  //render ke info elemen

  body.classList.toggle("dark")
}