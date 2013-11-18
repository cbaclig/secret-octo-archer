var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMissionRouter', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var MissionRouter, _ref;

  return MissionRouter = (function(_super) {
    __extends(MissionRouter, _super);

    function MissionRouter() {
      _ref = MissionRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MissionRouter.prototype.initialize = function(options) {
      return console.log('super mission router');
    };

    return MissionRouter;

  })(Backbone.Router);
});
