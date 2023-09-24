function multiply(num1, num2) {
    return num1 * num2;
}

let result = multiply(15, 3);

const resultElement = document.getElementById("multiplyResult");
resultElement.textContent = "The result is: " + result;

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Ciao ${myName}, benvenuto nel mondo bacididama`;
  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };  