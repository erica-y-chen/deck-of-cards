# 🃏 A simple card game

High-Low is a simple card game we'd like you to build using the [Deck of Cards API](https://deckofcardsapi.com/).

## How the game works

1. It starts with a deck of cards and drawing the first card from that deck and adding it to a pile.
2. The user then has to guess whether _the next_ card's number will be a higher number or lower number than the latest card.
    * If they are correct, we add that card to the pile.
    * If they are incorrect, the user gets a point for every card that was in the pile at that time (for example, if 10 cards were in the pile, they would get 10 points). And the pile is cleared.
3. After users have 3 successful guesses in a row, they can "pass" to the other player (you only need to support 2 players. and only one can guess at a time). By pass we mean that if you start as Player 1, you can change to play as Player 2. Player 2 can pass back to Player 1 once they get 3 successful guesses in a row.
4. The player with the least number of points at the end wins.

### Your implementation

You can build High-Low using any frontend technology you like. If you'd like to use a framework, that's totally fine. If you'd prefer raw HTML/CSS/JS, that's not a problem either. You are free to use any resource on the internet to help you, just don't use another human being.

Pay close attention to ensure your implementation of Hi-Low allows:
* The ability to pass between players and show who the current player is
* To keep track of successful guesses (streaks)
* The ability to restart the game

### What we're assessing

We are gauging:

1. How you write code and the patterns that you use
2. If your code is clean, idiomatic, and easy-to-read.
3. You can build a usable UI with your own added design flair
4. Whether your implementation actually works

### Submission

We'd like you to deploy your implementation of High-Low to the internet. There are several services online that make this incredibly easy. They include [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/), [Heroku](https://www.heroku.com/), [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html), and more.

Send a link of your deployed implementation, along with a link to the public git repository (GitHub, GitLab, Bitbucket, etc.) to [ammar@medsender.com](mailto:ammar@medsender.com)