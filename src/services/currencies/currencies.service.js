// Initializes the `currencies` service on path `/currencies`
const createService = require('feathers-knex');
const createModel = require('../../models/currencies.model');
const hooks = require('./currencies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'currencies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/currencies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('currencies');

  service.hooks(hooks);
};
