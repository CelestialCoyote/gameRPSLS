'use strict';


const Player = require('./player');


class PlayerHuman extends Player {

    constructor(name = 'DaveBowman') {
        super(name);
    }
}


// Export class.
module.exports = PlayerHuman; 