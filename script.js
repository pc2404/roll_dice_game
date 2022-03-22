
// Generate a random number
const randomNum1 = Math.floor(Math.random()*6) + 1

// image/dice6.png upto dice 6
const diceImage1 = 'assets/dice'+randomNum1+'.png';

document.querySelectorAll('img')[0].setAttribute('src', diceImage1);

// Generate a random number
const randomNum2 = Math.floor(Math.random()*6) + 1

// image/dice6.png upto dice 6
const diceImage2 = 'assets/dice'+randomNum2+'.png';

document.querySelectorAll('img')[1].setAttribute('src', diceImage2);

// Logic for winner
if (randomNum1 > randomNum2){
    document.querySelector('h1').innerHTML = 'The winner is Player 1';

}
else if(randomNum1 < randomNum2){
    document.querySelector('h1').innerHTML = 'The winner is Player 2';

}
else {
    document.querySelector('h1').innerHTML = 'Match Draw';

}