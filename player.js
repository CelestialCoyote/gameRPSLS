'use strict';


const prompt = require('prompt-sync')();


class Player {

    constructor(name) {
        this.name = name;
        this.score = 0;
        this.roundChoice = '';
        this.gameGestures = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    }

    displayName() {
        return console.log(`Player name: ${this.name}`);
    }

    setName(name) {
        this.name = name;
    }

    displayScore() {
        return console.log(`Player score: ${this.score}`);
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
                    console.log(`That is not a valid choice. Please try again.`);
                    userChoice = prompt('> ');
            }
        }
        this.roundChoice = userChoice;
    }
}

// Export class.
module.exports = Player; 