'use strict';


// NPM imports.
const prompt = require('prompt-sync')();

// Class and function imports.
const Game = require('./game');
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');


let game = new Game();

game.displayWelcome();
game.displayRules();
game.createPlayers();