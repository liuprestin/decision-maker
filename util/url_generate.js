const { v4: uuidv4 } = require('uuid');

// generate a unique string - for urls
function urlIdGenerate() {
    return uuidv4();
}

module.exports = { urlIdGenerate };