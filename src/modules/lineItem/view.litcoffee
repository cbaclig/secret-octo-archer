Abstract model meant to be extended by other projects

    define 'oaLineItemView', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class LineItemView extends Backbone.View
        initialize: (options) ->
          console.log 'super line item view'