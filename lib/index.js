'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      ReferencedIdentifier: function ReferencedIdentifier(path) {
        if (path.node.name === "__VERSION__") {
          path.replaceWith(t.valueToNode(version));
        }
        if (path.node.name === '__BUILD_TIME__') {
          path.replaceWith(t.valueToNode(buildAt));
        }
      }
    }
  };
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = JSON.parse(_fs2.default.readFileSync('package.json', 'utf8')).version;
var buildAt = Date.now();