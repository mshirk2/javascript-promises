url = 'http://deckofcardsapi.com/api/deck';

// 1.

axios.get(`${url}/new/draw/?count=1`)
	.then(res => {
		let {suit, value} = res.data.cards[0];
		console.log(`${value} of  ${suit}`);
	});

// 2.
let firstCard = null;
axios.get(`${url}/new/draw/?count=1`)
	.then(res => {
		firstCard = res.data.cards[0];
		let deckID = res.data.deck_id;
		return axios.get(`${url}/${deckID}/draw/?count=1`)
	})
	.then(res => {
		let secondCard = res.data.cards[0];
		[firstCard, secondCard].forEach(card => {
			console.log(`${card.value} of ${card.suit}`)
		})
	});

// // 3.
let $button = $("#draw");
let $cardArea = $("#card-area")
let deckID = null;

axios.get(`${url}/new/shuffle/?deck_count=1`).then(res => {
	deckID = res.data.deck_id;
})

$button.on('click', () => {
	axios.get(`${url}/${deckID}/draw/?count=1`)
		.then(res => {
			let cardImg = res.data.cards[0].image;
			$cardArea.append(
				$("<img>", {src: cardImg})
			)
			if(res.data.remaining === 0) $button.remove();
		});
});
