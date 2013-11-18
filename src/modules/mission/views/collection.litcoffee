Abstract view meant to be extended by other projects

    define 'oaMissionCollectionView', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class MissionCollectionView extends Backbone.View
        initialize: (options) ->
          console.log 'super mission collection view'