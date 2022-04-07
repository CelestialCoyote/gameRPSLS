'use strict';


// NPM imports.
const prompt = require('prompt-sync')();

// Class and function imports.
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');


class Game {
    constructor() {
        this.playerOne;
        this.playerTwo;
    }

    displayWelcome() {
        console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock');
    }

    displayRules() {

    }

    createPlayers(numberOfHumanPlayers) {

    }
}


// Export class.
module.exports = Game; 