Abstract model meant to be extended by other projects

    define [
      'jquery'
      'underscore'
      'backbone'
      './model'
    ], ($, _, Backbone, LineItemModel) ->
      class LineItemView extends Backbone.View
        initialize: (options) ->
          console.log 'super line item view'

          console.log 'LineItemModel using relative path:'
          new LineItemModel