"use strict"

module.exports = function(babel) {
  return {
    name: 'testPlugin',
    visitor: {
      Identifier: function Identifier(path) {
        path.node.name = path.node.name + '_test'
      }
    }
  }
}