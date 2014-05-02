var Backbone = require('backbone');

var <%= template %> = require('<%= fileName %>');

var <%= name %> = Backbone.View.extend({

  template: <%= template %>,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = <%= name %>;
