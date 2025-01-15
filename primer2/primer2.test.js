import shuffleAndDeal  from './primer2.js';

describe('Card Shuffler', () => {
  describe('Basic Functionality', () => {
    test('should return the correct number of hands', () => {
      const numPlayers = 4;
      const cardsPerHand = 5;
      const result = shuffleAndDeal(numPlayers, cardsPerHand);
      
      expect(result).toHaveLength(numPlayers);
      result.forEach(hand => {
        expect(hand).toHaveLength(cardsPerHand);
      });
    });

    test('each card should be a valid card string format', () => {
      const result = shuffleAndDeal(2, 5);
      const cardFormat = /^(Ace|[2-9]|10|Jack|Queen|King) of (Hearts|Diamonds|Clubs|Spades)$/;
      
      result.forEach(hand => {
        hand.forEach(card => {
          expect(card).toMatch(cardFormat);
        });
      });
    });

    test('should deal all unique cards (no duplicates)', () => {
      const result = shuffleAndDeal(4, 13); // Deal entire deck
      const allCards = result.flat();
      const uniqueCards = new Set(allCards);
      
      expect(allCards).toHaveLength(52);
      expect(uniqueCards.size).toBe(52);
    });
  });

  describe('Edge Cases', () => {
    test('should handle dealing entire deck', () => {
      const result = shuffleAndDeal(2, 26);
      const allCards = result.flat();
      
      expect(allCards).toHaveLength(52);
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveLength(26);
      expect(result[1]).toHaveLength(26);
    });

    test('should handle single player', () => {
      const result = shuffleAndDeal(1, 52);
      
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveLength(52);
    });

    test('should handle minimum cards per hand', () => {
      const result = shuffleAndDeal(52, 1);
      
      expect(result).toHaveLength(52);
      result.forEach(hand => {
        expect(hand).toHaveLength(1);
      });
    });

    test('allow passed in strings', () => {
      const result = shuffleAndDeal("2", "26");
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveLength(26);
    });
  });

  describe('Input Validation', () => {
    test('should throw error if requested cards exceed deck size', () => {
      expect(() => {
        shuffleAndDeal(11, 5); // 11 * 5 = 55 cards (more than deck)
      }).toThrow();
    });

    test('should throw error for invalid number of players', () => {
      expect(() => shuffleAndDeal(0, 5)).toThrow();
      expect(() => shuffleAndDeal(-1, 5)).toThrow();
      expect(() => shuffleAndDeal(null, 5)).toThrow();
      expect(() => shuffleAndDeal(undefined, 5)).toThrow();
    });

    test('should throw error for invalid cards per hand', () => {
      expect(() => shuffleAndDeal(4, 0)).toThrow();
      expect(() => shuffleAndDeal(4, -1)).toThrow();
      expect(() => shuffleAndDeal(4, null)).toThrow();
      expect(() => shuffleAndDeal(4, undefined)).toThrow();
    });

    test('should throw error for invalid inuts', () => {
      expect(() => shuffleAndDeal(undefined, undefined)).toThrow();
      expect(() => shuffleAndDeal(null, null)).toThrow();
    });
  });

  describe('Two Deck Support', () => {
    test('should support shuffling with two decks', () => {
      const result = shuffleAndDeal(8, 13, 2); // Using 2 decks
      const allCards = result.flat();
      
      // Should have 104 cards total
      expect(allCards).toHaveLength(104);
      
      // Count occurrences of each card
      const cardCounts = new Map();
      allCards.forEach(card => {
        cardCounts.set(card, (cardCounts.get(card) || 0) + 1);
      });
      
      // Each card should appear exactly twice
      cardCounts.forEach((count, card) => {
        expect(count).toBeLessThanOrEqual(2);
      });
    });

    test('should throw error if requested cards exceed two deck size', () => {
      expect(() => {
        shuffleAndDeal(21, 5, 2); // 21 * 5 = 105 cards (more than two decks)
      }).toThrow();
    });
  });

  describe('Card Distribution', () => {
    test('should have correct distribution of suits', () => {
      const result = shuffleAndDeal(4, 13); // Deal entire deck
      const allCards = result.flat();
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      
      suits.forEach(suit => {
        const suitCount = allCards.filter(card => card.includes(suit)).length;
        expect(suitCount).toBe(13);
      });
    });

    test('should have correct distribution of values', () => {
      const result = shuffleAndDeal(4, 13); // Deal entire deck
      const allCards = result.flat();
      const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      
      values.forEach(value => {
        const valueCount = allCards.filter(card => card.startsWith(value)).length;
        expect(valueCount).toBe(4);
      });
    });
  });
});
