'use strict';


const Player = require('./player');


class PlayerComputer extends Player {

    constructor(name = 'HAL-9000') {
        super(name);
    }
}


// Export class.
module.exports = PlayerComputer; 