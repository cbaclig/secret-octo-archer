Abstract Collection meant to be extended by other projects

    define 'oaMissionCollection', [
      'jquery'
      'underscore'
      'backbone'
      './model'
    ], ($, _, Backbone, Model) ->
      class MissionCollection extends Backbone.Collection

        model: Model

        initialize: (options) ->
          console.log 'super mission collection'