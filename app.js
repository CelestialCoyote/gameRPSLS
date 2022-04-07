'use strict';


const prompt = require('prompt-sync')();
const Player = require('./player');
const PlayerHuman = require('./playerHuman');
const PlayerComputer = require('./playerComputer');


//let playerOne = new Player('Tikaa');

//playerOne.chooseGesture('hammer');
//console.log(`PlayerOne choice: ${playerOne.roundChoice}`);
let playerOne = new PlayerHuman();
let playerThree = new PlayerHuman('Tikaa');
let playerTwo = new PlayerComputer();

playerOne.displayName('playerOne');
playerTwo.displayName('playerTwo');
playerThree.displayName('playerThree');
playerOne.setName('FrankPoole');
playerTwo.setName('SkyNet');
playerThree.setName('Kalani');
playerOne.displayName('playerOne');
playerTwo.displayName('playerTwo');
playerThree.displayName('playerThree');