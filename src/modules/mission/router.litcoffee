Abstract router meant to be extended by other projects

    define 'oaMissionRouter', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class MissionRouter extends Backbone.Router
        initialize: (options) ->
          console.log 'super mission router'