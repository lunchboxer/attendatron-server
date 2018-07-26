const assert = require('assert');
const app = require('../../src/app');

describe('\'semesters\' service', () => {
  it('registered the service', () => {
    const service = app.service('semesters');

    assert.ok(service, 'Registered the service');
  });
});
