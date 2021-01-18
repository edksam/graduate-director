// Initializes the `graduates` service on path `/graduates`
const { Graduates } = require("./graduates.class");
const createModel = require("../../models/graduates.model");
const hooks = require("./graduates.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use("/graduates", new Graduates(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("graduates");

  service.hooks(hooks);
};
