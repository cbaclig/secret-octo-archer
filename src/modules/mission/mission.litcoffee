A summary of the module that's easily required by other projects

    define [

Require "global" dependencies the child project is required to provide

      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->

Define our model for the module

      class Model extends Backbone.Model
        initialize: (options) ->
          console.log 'super mission model'

Define our collection that includes the Model


      class Collection extends Backbone.Collection

        model: Model

        initialize: (options) ->
          console.log 'super mission collection'

Define some views

      class ModelView extends Backbone.View
        initialize: (options) ->
          console.log 'super mission model view'

      class CollectionView extends Backbone.View
        initialize: (options) ->
          console.log 'super mission collection view'

Define a router for the module

      class Router extends Backbone.Router
        initialize: (options) ->
          console.log 'super mission router'

Return an object of them to use as a packaged module

      Router: Router
      Model: Model
      Collection: Collection
      Views:
        Model: ModelView
        Collection: CollectionView
