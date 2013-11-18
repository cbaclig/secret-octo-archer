var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMissionCollection', ['jquery', 'underscore', 'backbone', './model'], function($, _, Backbone, Model) {
  var MissionCollection, _ref;

  return MissionCollection = (function(_super) {
    __extends(MissionCollection, _super);

    function MissionCollection() {
      _ref = MissionCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MissionCollection.prototype.model = Model;

    MissionCollection.prototype.initialize = function(options) {
      return console.log('super mission collection');
    };

    return MissionCollection;

  })(Backbone.Collection);
});
