const assert = require('assert');
const uuid = require('./uuid');

describe('Sum test', () => {
  it('unique', () => {
    assert.notEqual(uuid(), uuid());
  });
});
