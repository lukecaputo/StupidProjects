var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

console.log("User: " + userChoice);
console.log("Computer: " + computerChoice);

var compare = function(c1, c2) {
    if (c1 === c2) {
        return "It's a tie!";
    } else if (c1 === "rock") {
        if (c2 === "scissors") {
            return "Rock wins!";
        } else {
            return "Paper wins!";
        }
    } else if (c1 === "paper") {
        if (c2 === "rock") {
            return "Paper wins!";
        } else {
            return "Scissors wins!";
        }
    } else {
        if (c2 === "rock") {
            return "Rock wins!";
        } else {
            return "Scissors wins!";
        }
    }
}

console.log(compare(userChoice, computerChoice));
