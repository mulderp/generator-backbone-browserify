'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var CollectionGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the collection subgenerator with the argument ' + this.name + '.');
  },

  generateFile: function() {

    var context = {
        content: this.name,
        name: this._.classify(this.name)
    }
    var collection = 'app/collections/' + this.name + '.js';
    this.template("collection.js", collection, context);
  }

});

module.exports = CollectionGenerator;
