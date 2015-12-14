var name = prompt("What is your name?");

function checkName() {
  if (name.length <= 0) {
    alert("No response.");
  } else {
    alert("Hello, " + name + "!");
    return;
  }
}

checkName();


var wish = prompt("What is your wish?");

function checkWish() {
  if (wish.length <= 0) {
    alert("No response.");
  } else {
    alert("Standby....");
    return;
  }
}

checkWish();


alert("Okay, " + name + ".... I have the unfortunate task of informing you that you will never achieve the following wish: " + "'" + wish + "'");
