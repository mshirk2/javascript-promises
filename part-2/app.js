url = 'http://deckofcardsapi.com/api/deck';

// 1.

let newDeck1 = axios.get(`${url}/new/shuffle/?deck_count=1`);
let deckID1 = newDeck1.deck_id;

let newCard = axios.get(`${url}/${deckID1}/draw/?count=1`)
	.then(console.log(newCard.value," of ", newCard.suit));

// 2.

let newDeck2 = axios.get(`${url}/new/shuffle/?deck_count=1`);
let deckID2 = newDeck2.deck_id;

let firstCard = axios.get(`${url}/${deckID2}/draw/?count=1`);
let secondCard = axios.get(`${url}/${deckID2}/draw/?count=1`)
	.then(console.log(firstCard.value," of ", firstCard.suit))
	.then(console.log(secondCard.value," of ", secondCard.suit));

// 3.
let $button = $("#draw");
let getDeck = axios.get(`${url}/new/shuffle/?deck_count=1`)
let deckID = getDeck.deck_id;

$button.on('click', () => {
	let card = axios.get(`${url}/${deckID}/draw/?count=1`)
		.then(console.log(card.value," of ", card.suit));
});
