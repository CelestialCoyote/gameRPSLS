'use strict';


const prompt = require('prompt-sync')();
const Player = require('./player');


let playerOne = new Player('Tikaa');

playerOne.chooseGesture('hammer');
console.log(`PlayerOne choice: ${playerOne.roundChoice}`);