var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
]

var cardsInPlay = [];

var checkForMatch = function()
{
	if (cardsInPlay.length < 2)
	{
		return;
	}
	else if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1]) {
	     	console.log("You found a match!");
	  	} else {
	     	console.log("Sorry, try again.");
	  	}
	}
	else 
	{
		resetBoard();
	}
}

var flipCard = function()
{
	if (cardsInPlay.length === 2) {
		resetBoard();
	}
	else {
		var cardId = this.getAttribute('data-id');
		cardsInPlay.push(cards[cardId].rank);

		this.setAttribute('src', cards[cardId].cardImage);

		console.log("User flipped " + cards[cardId].rank);
	/*	console.log(cards[cardId].suit);
		console.log(cards[cardId].cardImage);	*/

		checkForMatch();
	}
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	cardsInPlay.pop();
	cardsInPlay.pop();
	}
}

createBoard();

