// Initializes the `attendances` service on path `/attendances`
const createService = require('feathers-sequelize');
const createModel = require('../../models/attendances.model');
const hooks = require('./attendances.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/attendances', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendances');

  service.hooks(hooks);
};
