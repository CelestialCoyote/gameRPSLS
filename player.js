'use strict';


// NPM imports.
const prompt = require('prompt-sync')();
const chalk = require('chalk');

const log = console.log;    // Short version of console.log call.


class Player {

    constructor(name) {
        this.name = name;
        this.score = 0;
        this.roundChoice = '';
        this.gameGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }

    displayName(player) {
        return log(chalk.cyan(`\n${player}'s name: ${this.name}`));
    }

    setName(name) {
        this.name = name;
    }

    displayScore() {
        return log(chalk.cyan(`Player score: ${this.score}`));
    }

    setScore(score) {
        this.score = score;
    }

    chooseGesture(gestureChoice) {
        let isValid = false;
        let userChoice = gestureChoice.toLowerCase();
        this.roundChoice = '';

        while(!isValid){
            switch (userChoice) {
                case 'rock':
                    isValid = true;
                    break;
                case 'paper':
                    isValid = true;
                    break;
                case 'scissors':
                    isValid = true;
                    break;
                case 'lizard':
                    isValid = true;
                    break;
                case 'spock':
                    isValid = true;
                    break;
                default:
                    log(chalk.red(`That is not a valid choice. Please try again.`));
                    userChoice = prompt('> ');
            }
        }
        this.roundChoice = userChoice;
    }
}

// Export class.
module.exports = Player; 