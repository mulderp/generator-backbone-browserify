'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ViewGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the view subgenerator with the argument ' + this.name + '.');
  },

  generateFile: function() {

    var context = {
        template: this.name + 'Template',
        fileName: 'templates/' + this.name + '.hbs',
        name: this._.classify(this.name)
    }
    var view = 'app/views/' + this.name + '.js';
    this.template("view.js", view, context);
    this.copy('template.hbs', 'app/templates/' + this.name + '.hbs');
  }

});

module.exports = ViewGenerator;
