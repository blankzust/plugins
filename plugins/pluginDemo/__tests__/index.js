var codeStr = "var a = 1";
var pluginTester = require('babel-plugin-tester')
var plugin = require("../lib/index")

pluginTester({
  plugin: plugin,
  tests: {
    "let a = 1": "let a = 1"
  },
})

