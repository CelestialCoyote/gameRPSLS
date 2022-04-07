'use strict';


const prompt = require('prompt-sync')();
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');


let playerOne = new PlayerHuman();
let playerTwo = new PlayerComputer();

playerOne.displayName('playerOne');
playerTwo.displayName('playerTwo');

console.log(playerTwo.roundChoice);
playerTwo.chooseGesture();
console.log(playerTwo.roundChoice);