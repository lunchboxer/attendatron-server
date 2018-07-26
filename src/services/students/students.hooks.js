const { authenticate } = require('@feathersjs/authentication').hooks
const autoPinyin = require('../../hooks/auto-pinyin')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [autoPinyin()],
    update: [autoPinyin()],
    patch: [autoPinyin()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
