const assert = require('assert');
const {Given, When, Then} = require("cucumber");
let app = require('../../../src/app');

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
  });


  When('I ask whether it\'s friday yet', function () {
    this.actualAnswer = app.isItFriday(this.today);
  });

  Then('I Should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });