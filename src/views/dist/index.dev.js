"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./test/index"));

var _index2 = _interopRequireDefault(require("./sidebar/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Test: _index["default"],
  Sidebar: _index2["default"]
};
exports["default"] = _default;