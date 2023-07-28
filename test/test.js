var assert = require('assert');
const database = require("../db/database");
let creator = {"phone_number": "4318876188","name":"Emmanuel Balogun","email": "emanuelbalogun@gmail.com"}
let result = ["4318876188","Emmanuel Balogun", "emanuelbalogun@gmail.com"];

describe('Database function test', function () {
  describe('addsurveycreator', function () {
    it('should return a row of inserted record', function () {
      assert.deepEqual(database.addSurveycreator(creator), result);
    });
  });
});