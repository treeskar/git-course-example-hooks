/**
 * @description Function returns sum of all arguments
 * @param  {...{number|string|boolean}}} args
 * @returns {number} sum of all arguments
*/
module.exports = function sum(...args) {
    return args
        .map(num => parseInt(num, 10))
        .filter(num => Number.isInteger(num))
        .reduce((sum, num) => (sum + num), 0);
}
