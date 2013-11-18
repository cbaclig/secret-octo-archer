A summary of the module that's easily required by other projects

    define 'oaMission', [

Require relative dependencies

      './router'
      './model'
      './collection'
      './views/model'
      './views/collection'
    ], (Router, Model, Collection, ModelView, CollectionView) ->

Return an object of them to use as a packaged module

      Router: Router
      Model: Model
      Collection: Collection
      Views:
        Model: ModelView
        CollectionView: CollectionView