'use strict';


const prompt = require('prompt-sync')();
const Player = require('./player');


let playerOne = new Player('Tikaa');
console.log(JSON.stringify(playerOne));

playerOne.displayName();
playerOne.setName('Kalani');
playerOne.displayName();
playerOne.displayScore();
playerOne.setScore(1);
playerOne.displayScore();
console.log(`PlayerOne choice: ${playerOne.roundChoice}`);
playerOne.chooseGesture('rock');
console.log(`PlayerOne choice: ${playerOne.roundChoice}`);