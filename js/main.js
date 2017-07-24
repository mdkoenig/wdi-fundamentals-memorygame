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
	if (cardsInPlay[0] === cardsInPlay[1]) {
     	console.log("You found a match!");
  	} else {
     	console.log("Sorry, try again.");
  	}
}

var flipCard = function(cardId)
{
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
}

flipCard(1);
flipCard(2);

checkForMatch();