var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay[0]);
console.log(cardsInPlay[1]);

var x = cardsInPlay.length;

console.log(x);

if (x === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1])
		{console.log("You found a match!");}
	else 
		{console.log("Sorry, try again");}
}
	else
		{console.log("Pick again");}