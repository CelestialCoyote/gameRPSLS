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
            log(chalk.magenta(`\nnumberOfPlayers set to: ${this.numberOfPlayers}\n`));
            log('');
        } else if(response === '2') {
            log(chalk.green(`\nOne human player vs. another human player.\n`));
            log(chalk.cyan(`What is Player One's name?\n`));
            response = prompt(chalk.cyan('> '));

            this.playerOne = new PlayerHuman(response);
            log(`\n`);

            log(chalk.cyan(`What is Player Two's name?\n`));
            response = prompt(chalk.cyan('> '));

            this.playerTwo = new PlayerHuman(response);
            log(`\n`);

            this.playerOne.displayName('Player One');
            this.playerTwo.displayName('Player Two');
            this.numberOfPlayers = 2;
    
            log(chalk.magenta(`\nnumberOfPlayers set to: ${this.numberOfPlayers}\n`));
            log('');
        } else {
            log(chalk.red(`\nThat is not a valid input.\nPlease enter '1' or '2'.\n`));
            return this.createPlayers();
        }
    }

    playRound() {
        log(chalk.cyan(`What is Player One's gesture?`));
        let playerOneMove = prompt(chalk.yellow('>'));

        this.playerOne.chooseGesture(playerOneMove);
        log('');

        if(this.numberOfPlayers === 2) {
            log(chalk.cyan(`What is Player Two's gesture?`));
            let playerTwoMove = prompt(chalk.yellow('>'));

            this.playerTwo.chooseGesture(playerTwoMove);
            log('');
        } else {
            this.playerTwo.chooseGesture();
        }

        log(this.playerOne.roundChoice);
        log(this.playerTwo.roundChoice);
        
    }

    checkRoundWinner() {

    }

    runGame() {
        this.displayWelcome();
        this.displayRules();
        this.createPlayers();
    }
}


// Export class.
module.exports = Game; 