'use strict';


class Player {

    constructor(name, score, roundChoice) {
        this.name = name;
        this.score = score;
        this.roundChoice = roundChoice;
        this.gameGestures = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    }

    displayName() {
        return console.log(`Player name: ${this.name}`);
    }

    setName(name) {
        this.name = name;
    }

    chooseGesture(gestureChoice) {
        let roundChoice = '';

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
        return roundChoice;
    }
}

// Export class.
module.exports = Player; 