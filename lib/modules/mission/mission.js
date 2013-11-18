define('oaMission', ['./router', './model', './collection', './views/model', './views/collection'], function(Router, Model, Collection, ModelView, CollectionView) {
  return {
    Router: Router,
    Model: Model,
    Collection: Collection,
    Views: {
      Model: ModelView,
      CollectionView: CollectionView
    }
  };
});
