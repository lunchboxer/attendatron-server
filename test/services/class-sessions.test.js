const assert = require('assert');
const app = require('../../src/app');

describe('\'classSessions\' service', () => {
  it('registered the service', () => {
    const service = app.service('class-sessions');

    assert.ok(service, 'Registered the service');
  });
});
