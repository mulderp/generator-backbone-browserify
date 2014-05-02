'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModelGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the model subgenerator with the argument ' + this.name + '.');
  },

  generateFile: function() {

    var context = {
        content: this.name,
        name: this._.classify(this.name)
    }
    var model = 'app/models/' + this.name + '.js';
    this.template("model.js", model, context);
  }

});

module.exports = ModelGenerator;
