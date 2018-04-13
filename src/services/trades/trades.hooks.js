

const processTrade = require('../../hooks/process-trade');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processTrade()],
    update: [],
    patch: [],
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
};
