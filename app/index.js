'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var BackboneBrowserifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Backbone Browserify generator.'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/views');
    this.mkdir('app/collections');
    this.mkdir('app/models');
    this.mkdir('app/routers');
    this.mkdir('app/templates');
    this.mkdir('app/node_modules');
    this.mkdir('api');
    this.mkdir('static');

    this.copy('_package.json', 'package.json');
    this.copy('_server.js', 'server.js');
    this.copy('_main.js', 'app/main.js');
    this.copy('_index.html', 'static/index.html');
    this.copy('style.css', 'static/style.css');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('Makefile', 'Makefile');
    this.copy('symlink.sh', 'symlink.sh');
    this.copy('links.js', 'links.js');
  }
});

module.exports = BackboneBrowserifyGenerator;
