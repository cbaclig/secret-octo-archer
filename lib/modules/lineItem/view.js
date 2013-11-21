var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'underscore', 'backbone', './model'], function($, _, Backbone, LineItemModel) {
  var LineItemView, _ref;

  return LineItemView = (function(_super) {
    __extends(LineItemView, _super);

    function LineItemView() {
      _ref = LineItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    LineItemView.prototype.initialize = function(options) {
      console.log('super line item view');
      console.log('LineItemModel using relative path:');
      return new LineItemModel;
    };

    return LineItemView;

  })(Backbone.View);
});
