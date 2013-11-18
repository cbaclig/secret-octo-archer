var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMissionCollectionView', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var MissionCollectionView, _ref;

  return MissionCollectionView = (function(_super) {
    __extends(MissionCollectionView, _super);

    function MissionCollectionView() {
      _ref = MissionCollectionView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MissionCollectionView.prototype.initialize = function(options) {
      return console.log('super mission collection view');
    };

    return MissionCollectionView;

  })(Backbone.View);
});
