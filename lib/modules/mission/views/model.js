var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMissionModelView', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var MissionModelView, _ref;

  return MissionModelView = (function(_super) {
    __extends(MissionModelView, _super);

    function MissionModelView() {
      _ref = MissionModelView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MissionModelView.prototype.initialize = function(options) {
      return console.log('super mission model view');
    };

    return MissionModelView;

  })(Backbone.View);
});
