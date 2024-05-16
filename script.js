'use-strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
const score = [0, 0];
let activePlayer = 0;
let playing = true;
diceEl.classList.add('hidden');

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling the Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display roll dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    // if dice roll is 1, switch to next player
    if (dice != 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
  // Generating a random dice roll
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    console.log('Here is the score of active Player', score[activePlayer]);
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        diceEl.classList.add('hidden')
      document.querySelector(`#name--${activePlayer}`).textContent = `Player wins!!`
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
  score0El.textContent=0; 
  score1El.textContent=0; 
  current0El.textContent=0; 
  current1El.textContent=0; 
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer+1}`
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  currentScore=0;
  activePlayer=0;
  playing=true;
  diceEl.classList.add('hidden')
})

