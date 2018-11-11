const assert = require('assert');
const sum = require('./sum');

describe('Sum test', () => {
    it('positive', () => {
        assert.equal(sum(1,2,3), 6);
    });

    it('negative', () => {
        assert.notEqual(sum(1,3), 5);
    });

    it('empty', () => {
        assert.equal(sum(), 0);
    });

    it('parse string to integer', () => {
        assert.equal(sum(1, '2'), 3);
    });

    it('filter not integer arguments from sum result', () => {
        assert.equal(sum(1, '2', 'a'), 3);
    });
});
