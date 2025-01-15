
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.

// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

// TODO: Deal cards to the specified number of players.

// TODO: Return the hands dealt as an array of arrays.

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.


const shuffleAndDeal = (numPlayers, cardsPerPlayer, numDecks = 1) => {
    numPlayers = parseInt(numPlayers); //add tests for string inputs
    cardsPerPlayer = parseInt(cardsPerPlayer);
    if (!numPlayers || !cardsPerPlayer || numPlayers <= 0 || cardsPerPlayer <= 0) {
        throw new Error("numPlayers and cardsPerPlayer must be a positive integer.");
    };
    // if (numPlayers <= 0 && cardsPerPlayer <= 0) { // check if this can be in the same conditional statement
    //     return new Error("numPlayers and cardsPerPlayer must be a positive integer.");
    // };

    let deckOfCards = createDeck(numDecks);
    if (deckOfCards.length < (numPlayers * cardsPerPlayer)) {
        throw new Error("Number of requested cards exceeds number of cards in deck.")
    }
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


