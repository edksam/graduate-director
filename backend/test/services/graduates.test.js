const assert = require("assert");
const app = require("../../src/app");

describe("'graduates' service", () => {
  it("registered the service", () => {
    const service = app.service("graduates");

    assert.ok(service, "Registered the service");
  });
});
