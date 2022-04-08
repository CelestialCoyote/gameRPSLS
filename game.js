'use strict';


// NPM imports.
const prompt = require('prompt-sync')();
const chalk = require('chalk');

// Class and function imports.
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');

const log = console.log;    // Short version of console.log call.


class Game {
    constructor() {
        this.playerOne;
        this.playerTwo;
        this.numberOfPlayers = 0;
        this.numberOfRounds = 0;
    }

    displayWelcome() {
        log(`\n\n\n\n\n`);
        log(chalk.bgYellow(`--------------------\n`));
        log(chalk.cyan(`Welcome to a game of Rock, Paper, Scissors, Lizard, Spock.\n`));
        log(chalk.bgYellow(`--------------------\n`));
    }

    displayRules() {
        log(chalk.cyan(`The rules are as follows . . .\n`));
        log(chalk.yellow(`1. For every round played, each player will select one of five (5) gestures.`));
        log(chalk.yellow(`2. If each player selects the same gesture, a draw will be declared.`));
        log(chalk.yellow(`3. If each player selects a different gesture, a winner of the round will be declared.`));
        log(chalk.yellow(`4. The winner's score will be incremented.`));
        log(chalk.yellow(`5. If neither player has a score of 3 rounds won, a new round will begin.`));
        log(chalk.yellow(`6. When a player wins 3 rounds, then they will be declared the winner of the game.\n`));
        log(chalk.bgYellow(`--------------------\n`));
        log(chalk.yellow(`The winning gestures are as follows . . .\n`));
        log(chalk.green('Rock') + ' crushes ' + chalk.red('Scissors'));
        log(chalk.green('Scissors') + ' cuts ' + chalk.red('Paper'));
        log(chalk.green('Paper') + ' covers ' + chalk.red('Rock'));
        log(chalk.green('Rock') + ' crushes ' + chalk.red('Lizard'));
        log(chalk.green('Lizard') + ' poisons ' + chalk.red('Spock'));
        log(chalk.green('Spock') + ' smashes ' + chalk.red('Scissors'));
        log(chalk.green('Scissors') + ' decapitate ' + chalk.red('Lizard'));
        log(chalk.green('Lizard') + ' eats ' + chalk.red('Paper'));
        log(chalk.green('Paper') + ' disproves ' + chalk.red('Spock'));
        log(chalk.green('Spock') + ' vaporizes ' + chalk.red('Rock'));
        log(``);
    }

    createPlayers() {
        log(chalk.cyan(`How many human players in the game?\n1 or 2?\n`));
        let response = prompt(chalk.yellow('> '));

        if(response === '1') {
            log(chalk.green(`\nOne human player vs. the computer.\n`));
            log(chalk.cyan(`What is Player One's name?\n`));
            response = prompt(chalk.cyan('> '));

            this.playerOne = new PlayerHuman(response);
            this.playerTwo = new PlayerComputer();
            this.numberOfPlayers = 1;

            this.playerOne.displayName('Player One');
            this.playerTwo.displayName('Player Two');
            log('');
        } else if(response === '2') {
            log(chalk.green(`\nOne human player vs. another human player.\n`));
            
            log(chalk.cyan(`What is Player One's name?\n`));
            response = prompt(chalk.cyan('> '));
            this.playerOne = new PlayerHuman(response);
            log(``);

            log(chalk.cyan(`What is Player Two's name?\n`));
            response = prompt(chalk.cyan('> '));
            this.playerTwo = new PlayerHuman(response);
            log(``);

            this.numberOfPlayers = 2;

            this.playerOne.displayName('Player One');
            this.playerTwo.displayName('Player Two');
            log('');
        } else {
            log(chalk.red(`\nThat is not a valid input.\nPlease enter '1' or '2'.\n`));
            return this.createPlayers();
        }
    }

    playRound() {
        log(chalk.cyan(`What is Player One's gesture?\n` + chalk.yellow(`1 - rock, 2 - paper, 3 - scissors, 4 - lizard, 5 - spock`)));
        let playerOneMove = prompt(chalk.yellow('>'));

        this.playerOne.chooseGesture(playerOneMove);
        log('');

        if(this.numberOfPlayers === 2) {
            log(chalk.cyan(`What is Player Two's gesture?\n` + chalk.yellow(`1 - rock, 2 - paper, 3 - scissors, 4 - lizard, 5 - spock`)));
            let playerTwoMove = prompt(chalk.yellow('>'));

            this.playerTwo.chooseGesture(playerTwoMove);
            log('');
        } else {
            this.playerTwo.chooseGesture();
        }
        
        log(chalk.yellow(`\nPlayer One's gesture was: ` + chalk.green(`${this.playerOne.roundChoice}`)));
        log(chalk.yellow(`Player Two's gesture was: ` + chalk.green(`${this.playerTwo.roundChoice}\n`)));
        this.checkRoundWinner(this.playerOne.roundChoice, this.playerTwo.roundChoice);
    }

    checkRoundWinner(playerOneGesture, playerTwoGesture) {
        if(playerOneGesture === playerTwoGesture) {
            this.displayRoundWinnerMessage('draw', playerOneGesture, playerTwoGesture, '');
        }

        switch (playerOneGesture) {
            case 'rock':
                if(playerTwoGesture === 'scissors') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'cushes');
                } else if(playerTwoGesture === 'lizard') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'cushes');
                } else if(playerTwoGesture === 'paper') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'ccvers');
                } else if(playerTwoGesture === 'spock') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'vaporizes');
                }
                break;
            case 'paper':
                if(playerTwoGesture === 'rock') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'covers');
                } else if(playerTwoGesture === 'spock') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'disproves');
                } else if(playerTwoGesture === 'scissors') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'cuts');
                } else if(playerTwoGesture === 'lizard') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'eats');
                }
                break;
            case 'scissors':
                if(playerTwoGesture === 'paper') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'cuts');
                } else if(playerTwoGesture === 'lizard') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'decapitates');
                } else if(playerTwoGesture === 'rock') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'crushes');
                } else if(playerTwoGesture === 'spock') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'smashes');
                }
                break;
            case 'lizard':
                if(playerTwoGesture === 'spock') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'poisons');
                } else if(playerTwoGesture === 'paper') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'eats');
                } else if(playerTwoGesture === 'rock') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'crushes');
                } else if(playerTwoGesture === 'scissors') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'decapitates');
                }
                break;
            case 'spock':
                if(playerTwoGesture === 'scissors') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'smashes');
                } else if(playerTwoGesture === 'rock') {
                    this.displayRoundWinnerMessage('playerOne', playerOneGesture, playerTwoGesture, 'vaporizes');
                } else if(playerTwoGesture === 'lizard') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'poisons');
                } else if(playerTwoGesture === 'paper') {
                    this.displayRoundWinnerMessage('playerTwo', playerOneGesture, playerTwoGesture, 'disproves');
                }
                break;
        }
    }

    displayRoundWinnerMessage(winner, playerOneGesture, playerTwoGesture, verb) {
        this.numberOfRounds++;
        
        if(winner === 'playerOne') {
            this.playerOne.score++;
            log(chalk.green(`Player One wins round.\n`));
            log(chalk.green(`${playerOneGesture}`) + ` ${verb} ` + chalk.red(`${playerTwoGesture}`));
        } else if (winner === 'playerTwo') {
            this.playerTwo.score++;
            log(chalk.green(`Player Two wins round.\n`));
            log(chalk.green(`${playerTwoGesture}`) + ` ${verb} ` + chalk.red(`${playerOneGesture}`));
        } else if(winner === 'draw') {
            log(chalk.cyan(`No winner this round. Both players chose `) + chalk.red(`${playerOneGesture}.\n`));
            this.playRound();
        }
        this.checkForGameWinner();
    }

    checkForGameWinner() {
        if(this.playerOne.score < 3 && this.playerTwo.score < 3) {
            log(chalk.cyan(`\nAfter ${this.numberOfRounds} round(s), the current score is:`));
            log(chalk.cyan(`Player One - ${this.playerOne.score} to Player Two - ${this.playerTwo.score}\n`));
            log(chalk.cyan(`Next round, starts now.\n`));
            this.playRound();
        } else if(this.playerOne.score === 3) {
            log(chalk.cyan(`\nPlayer One - `) + chalk.green(`${this.playerOne.name}`) + chalk.cyan(` is the winner!\n`));
            this.restartGame();
        } else if(this.playerTwo.score === 3) {
            log(chalk.cyan(`\nPlayer Two - `) + chalk.green(`${this.playerTwo.name}`) + chalk.cyan(` is the winner!\n`));
            this.restartGame();
        }
    }

    restartGame() {
        log(chalk.cyan(`Do you want to start another game?\n'Yes' or 'No'.`));
        let restart = prompt(chalk.yellow('> ')).toLowerCase();

        if(restart === 'yes') {
            this.numberOfRounds = 0;
            this.numberOfPlayers = 0;
            this.runGame();
        } else if(restart === 'no') {
            return process.exit();
        } else {
            log(chalk.cyan(`\nDid not understand response, please enter 'Yes' or 'No'.`));
            return this.restartGame();
        }
    }

    runGame() {
        this.displayWelcome();
        this.displayRules();
        this.createPlayers();
        this.playRound();
    }
}


// Export class.
module.exports = Game; 