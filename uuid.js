const crypto = require('crypto');

module.exports = function uuid(size = 64) {
    return crypto.randomBytes(size).toString('hex');
}
