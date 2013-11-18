var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaLineItemModel', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var LineItemModel, _ref;

  return LineItemModel = (function(_super) {
    __extends(LineItemModel, _super);

    function LineItemModel() {
      _ref = LineItemModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    LineItemModel.prototype.initialize = function(options) {
      return console.log('super line item model');
    };

    return LineItemModel;

  })(Backbone.Model);
});
