const graduates = require("./graduates/graduates.service.js");
const users = require("./users/users.service.js");

const uploads = require("./uploads/uploads.service.js");


// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(graduates);
  app.configure(users);
  app.configure(uploads);
};
