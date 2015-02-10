var Module = require('./module'),
_ = require('underscore');

module.exports = function(Mn) {
  Mn.Application.prototype.module = function(moduleNames, moduleDefinition) {
    // Overwrite the module class if the user specifies one
    var ModuleClass = Module.getClass(moduleDefinition);

    var args = _.toArray(arguments);
    args.unshift(this);

    // see the Marionette.Module object for more information
    return ModuleClass.create.apply(ModuleClass, args);
  }

  return Mn;
}
