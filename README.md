# 🃏 A simple card game

High-Low is a simple card game built using the [Deck of Cards API](https://deckofcardsapi.com/).

## How the game works

1. It starts with a deck of cards and drawing the first card from that deck and adding it to a pile.
2. The user then has to guess whether _the next_ card's number will be a higher number or lower number than the latest card.
    * If they are correct, we add that card to the pile.
    * If they are incorrect, the user gets a point for every card that was in the pile at that time (for example, if 10 cards were in the pile, they would get 10 points). And the pile is cleared.
3. After users have 3 successful guesses in a row, they can "pass" to the other player (you only need to support 2 players. and only one can guess at a time). By pass we mean that if you start as Player 1, you can change to play as Player 2. Player 2 can pass back to Player 1 once they get 3 successful guesses in a row.
4. The player with the least number of points at the end wins.


## 🃏 Deployment 

Deployed on Netlify at https://high-low.netlify.com/ 

## Time Frame to Build

1 week