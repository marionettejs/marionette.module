global.window = null;

var shim = require('../src');
var chai  = require('chai');
expect = chai.expect;

describe("shim", function() {
  it("adds the module method to the application prototype", function() {
    this.base = {Application: function(){}};

    shim.shim(this.base);

    expect(this.base.Application.prototype.module).to.be.defined;
  });

  it("does not work if there is not an application object", function() {
    this.base = {};

    expect(function() {
      shim.shim(this.base)
    }).to.throw();
  });
});
