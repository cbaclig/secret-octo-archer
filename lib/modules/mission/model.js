var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMissionModel', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var MissionModel, _ref;

  return MissionModel = (function(_super) {
    __extends(MissionModel, _super);

    function MissionModel() {
      _ref = MissionModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MissionModel.prototype.initialize = function(options) {
      return console.log('super mission model');
    };

    return MissionModel;

  })(Backbone.Model);
});
