'use strict';


const Player = require('./player');


class PlayerComputer extends Player {

    constructor(name = 'HAL-9000') {
        super(name);
    }

    chooseGesture() {
        let computerChoice = Math.floor(Math.random() * this.gameGestures.length);
        this.roundChoice = '';

        switch (computerChoice) {
            case 0:
                this.roundChoice = 'rock';
                break;
            case 1:
                this.roundChoice = 'paper';
                break;
            case 2:
                this.roundChoice = 'scissors';
                break;
            case 3:
                this.roundChoice = 'lizard';
                break;
            case 4:
                this.roundChoice = 'spock';
                break;
        }
    }
}


// Export class.
module.exports = PlayerComputer; 