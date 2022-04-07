'use strict';


// NPM imports.
const prompt = require('prompt-sync')();

// Class and function imports.
const Game = require('./game');
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');


// Create new Game object so game can be played.
let game = new Game();

// Start the game.
game.runGame();