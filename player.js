'use strict';


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
        switch (gestureChoice.toLowerCase()) {
            case 'rock':
                break;
            case 'paper':
                break;
            case 'scissors':
                break;
            case 'lizard':
                break;
            case 'spock':
                break;
            default:
                console.log('That is not a valid choice. Please try again.');
        }
        
        this.roundChoice = gestureChoice;
    }
}

// Export class.
module.exports = Player; 