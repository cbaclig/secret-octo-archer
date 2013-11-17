Abstract model meant to be extended by other projects

    define 'oa-line-item-model', [
      'jquery'
      'underscore'
      'backbone'
    ], ($, _, Backbone) ->
      class LineItemModel extends Backbone.Model
        initialize: (options) ->
          console.log 'super line item model'