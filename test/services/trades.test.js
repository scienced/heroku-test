const assert = require('assert');
const app = require('../../src/app');

describe('\'trades\' service', () => {
  it('registered the service', () => {
    const service = app.service('trades');

    assert.ok(service, 'Registered the service');
  });
});
