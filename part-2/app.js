// 1.

url = 'http://deckofcardsapi.com/api/deck';

let newDeck1 = axios.get(`${url}/new/shuffle/?deck_count=1`);
let deckID1 = newDeck1.deck_id;

let newCard = axios.get(`${url}/${deckID1}/draw/?count=1`)
	.then(console.log(newCard.value," of ", newCard.suit));

// 2.
url = "http://deckofcardsapi.com/api/deck";

let newDeck2 = axios.get(`${url}/new/shuffle/?deck_count=1`);
let deckID2 = newDeck2.deck_id;

let firstCard = axios.get(`${url}/${deckID2}/draw/?count=1`);
let secondCard = axios.get(`${url}/${deckID2}/draw/?count=1`)
	.then(console.log(firstCard.value," of ", firstCard.suit))
.then(console.log(secondCard.value," of ", secondCard.suit));

// 3.

