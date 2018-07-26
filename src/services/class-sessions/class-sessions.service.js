// Initializes the `classSessions` service on path `/class-sessions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/class-sessions.model');
const hooks = require('./class-sessions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/class-sessions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('class-sessions');

  service.hooks(hooks);
};
