// Initializes the `semesters` service on path `/semesters`
const createService = require('feathers-sequelize');
const createModel = require('../../models/semesters.model');
const hooks = require('./semesters.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/semesters', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('semesters');

  service.hooks(hooks);
};
