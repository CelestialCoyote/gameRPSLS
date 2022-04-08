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
        return log(chalk.cyan(`\n${player}'s name: ` + chalk.green(`${this.name}`)));
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
        this.roundChoice = '';

        while(!isValid){
            switch (gestureChoice) {
                case '1':
                    isValid = true;
                    break;
                case '2':
                    isValid = true;
                    break;
                case '3':
                    isValid = true;
                    break;
                case '4':
                    isValid = true;
                    break;
                case '5':
                    isValid = true;
                    break;
                default:
                    log(chalk.red(`That is not a valid choice. Please try again.`));
                    gestureChoice = prompt('> ');
            }
        }
        this.roundChoice = this.gameGestures[gestureChoice - 1];
    }
}

// Export class.
module.exports = Player; 