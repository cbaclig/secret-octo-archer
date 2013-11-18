Abstract model meant to be extended by other projects

    define 'oaMissionModel', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class MissionModel extends Backbone.Model
        initialize: (options) ->
          console.log 'super mission model'