let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Come ti chiami?");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Ciao ${myName}, benvenuto!`;
  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bentornato, ${storedName}`;
  }