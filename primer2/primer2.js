const shuffleAndDeal = (numPlayers, cardsPerPlayer, numDecks = 1) => {
    numPlayers = parseInt(numPlayers); //add tests for string inputs
    cardsPerPlayer = parseInt(cardsPerPlayer);
    if (!numPlayers || !cardsPerPlayer || numPlayers <= 0 || cardsPerPlayer <= 0) {
        throw new Error("numPlayers and cardsPerPlayer must be a positive integer.");
    };
    // if (numPlayers <= 0 && cardsPerPlayer <= 0) { // check if this can be in the same conditional statement
    //     return new Error("numPlayers and cardsPerPlayer must be a positive integer.");
    // };
    if (52 * numDecks < (numPlayers * cardsPerPlayer)) { //hardcoding 52 to validate instead of having to create the deck first.
        throw new Error("Number of requested cards exceeds number of cards in deck.")
    }
    let deckOfCards = createDeck(numDecks);
    // if (deckOfCards.length < (numPlayers * cardsPerPlayer)) {
    //     throw new Error("Number of requested cards exceeds number of cards in deck.")
    // }
    let shuffledDeckOfCards = shuffleDeck(deckOfCards)

    return handOutCards(shuffledDeckOfCards, numPlayers, cardsPerPlayer)
};

const handOutCards = (deck, numPlayers, cardsPerPlayer) => {
    let hands = [];
    for (let i = 0; i < numPlayers; i++) {
        hands.push(deck.splice(0, cardsPerPlayer));
    }
    return hands;
}

const createDeck = (numDecks = 1) => {
    // let deck = []
    const card_values = ["2", "3", "4", "5", "6", "7", "8", "9", , "10", "Jack", "Queen", "King", "Ace"]
    const card_suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
    //alternative method
    // card_values.forEach(value => { 
    //     for (suit of card_suits){
    //         deck.push(`${value} of ${suit}`)
    //     }
    // });
    // return deck
    return Array(numDecks).fill().flatMap(() => 
        card_suits.flatMap(suit =>
            card_values.map(value => `${value} of ${suit}`)
        )
    );
};

const shuffleDeck = (deck) => { 
    for (let i = deck.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck //this doesn't create a new copy of deck to reduce space complecity
}

export default shuffleAndDeal;


