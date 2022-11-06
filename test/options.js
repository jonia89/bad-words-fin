require("assert");
var Filter = require("../badWordsFin.js"),
  assert = require("better-assert");

describe("options", function () {
  describe("split regex", function () {
    it("default value", function () {
      filter = new Filter();
      filter.addWords("äpärä");
      assert(filter.clean("fucking asshole") == "******* *******");
      assert(filter.clean("kiva äpärä") == 'kiva äpärä');
    });

    it("override value", function () {
      filter = new Filter({ splitRegex: / / });
      filter.addWords("äpärä");
      assert(filter.clean("fucking asshole") == "******* *******");
      assert(filter.clean("kiva äpärä") == "kiva *****");
    });
  });
});
