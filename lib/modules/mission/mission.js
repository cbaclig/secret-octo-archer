var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('oaMission', ['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var Collection, CollectionView, Model, ModelView, Router, _ref, _ref1, _ref2, _ref3, _ref4;

  Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref = Model.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Model.prototype.initialize = function(options) {
      return console.log('super mission model');
    };

    return Model;

  })(Backbone.Model);
  Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref1 = Collection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Collection.prototype.model = Model;

    Collection.prototype.initialize = function(options) {
      return console.log('super mission collection');
    };

    return Collection;

  })(Backbone.Collection);
  ModelView = (function(_super) {
    __extends(ModelView, _super);

    function ModelView() {
      _ref2 = ModelView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    ModelView.prototype.initialize = function(options) {
      return console.log('super mission model view');
    };

    return ModelView;

  })(Backbone.View);
  CollectionView = (function(_super) {
    __extends(CollectionView, _super);

    function CollectionView() {
      _ref3 = CollectionView.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    CollectionView.prototype.initialize = function(options) {
      return console.log('super mission collection view');
    };

    return CollectionView;

  })(Backbone.View);
  Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref4 = Router.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    Router.prototype.initialize = function(options) {
      return console.log('super mission router');
    };

    return Router;

  })(Backbone.Router);
  return {
    Router: Router,
    Model: Model,
    Collection: Collection,
    Views: {
      Model: ModelView,
      Collection: CollectionView
    }
  };
});
