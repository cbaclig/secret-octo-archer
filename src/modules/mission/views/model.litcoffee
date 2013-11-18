Abstract view meant to be extended by other projects

    define 'oaMissionModelView', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class MissionModelView extends Backbone.View
        initialize: (options) ->
          console.log 'super mission model view'