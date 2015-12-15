var userGuess = prompt('Heads or Tails?');
var coin = Math.floor(Math.random() * 2);
var coinFace = [];

if (coin === 0) {
  coinFace.push('HEADS');
} else {
  coinFace.push('TAILS');
}

alert('Your guess is ' + userGuess.toUpperCase() + '. The result of the coin toss is ' + coinFace + '.');
