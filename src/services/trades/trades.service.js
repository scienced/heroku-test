// Initializes the `trades` service on path `/trades`
const createService = require('feathers-nedb');
const createModel = require('../../models/trades.model');
const hooks = require('./trades.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'trades',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/trades', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('trades');

  service.hooks(hooks);
};
