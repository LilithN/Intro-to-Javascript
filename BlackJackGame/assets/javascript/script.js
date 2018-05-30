/* Blackjack
   By Samantha Goodson
*/


//card variables made with 2 array
var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven',
  'Six', 'Five', 'Four', 'Three', 'Two'
];


//DOM variables
var textArea = document.getElementById('text-area');
var newGameButton = document.getElementById('new-game-button');
var hitButton = document.getElementById('hit-button');
var stayButton = document.getElementById('stay-button');


//Game Variables (3 boolean, 3 array)
var gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

//Display before Game Starts
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

//Handler for when the player clicks on the 'New Game' Button
newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()]
  playerCards = [getNextCard(), getNextCard()]

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

//Event Handler for Hit Button
hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
})

//Event Handler for Stay Button
stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
})

//Creating the deck
function createDeck() {
  var deck = [];
  for (var suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (var valueIdx = 0; valueIdx < values.length; valueIdx++) {
      var card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

//Shuffling Deck Cards
function shuffleDeck(deck) {
  for (var i = 0; i < deck.length; i++) {
    var swapIdx = Math.trunc(Math.random() * deck.length);
    var tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

//Text input
function getCardString(card) {
  return card.value + " of " + card.suit;
}

function getNextCard() {
  return deck.shift();
}


//Value of each card
function getCardNumericValue(card) {
  switch (card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

//Getting the score of the cards
function getScore(cardArray) {
  var score = 0;
  var hasAce = false;
  for (var i = 0; i < cardArray.length; i++) {
    var card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

//End Of Game
function checkForEndOfGame() {

  updateScores();

  if (gameOver) {
    //let dealer take cards
    while (dealerScore < playerScore &&
      playerScore <= 21 &&
      dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }

  //TESTING
  else if (playerScore === 21) {
    playerWon = true;
    gameOver = true;
  } else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {

    if (playerScore > dealerScore) {
      playerWon = true;
    } else {
      playerWon = false;
    }
  }
}

//If game has NOT started
function showStatus() {
  if (!gameStarted) {
    textArea.innerText = "The Dealer says \"Hi!\"";
    return;
  }
  var dealerCardString = '';
  for (var i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  var playerCardString = '';
  for (var i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }

  updateScores();

  textArea.innerText =
    'Dealer Has:\n' +
    dealerCardString +
    '(score: ' + dealerScore + ')\n\n' +

    'Player Has:\n' +
    playerCardString +
    '(score: ' + playerScore + ')\n\n';

  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "YOU WIN!";
    } else {
      textArea.innerText += "DEALER WINS!";
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
}
