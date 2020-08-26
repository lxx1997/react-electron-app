"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./test/index"));

var _index2 = _interopRequireDefault(require("./sidebar/index"));

var _index3 = _interopRequireDefault(require("./chart/index"));

var _index4 = _interopRequireDefault(require("./document/index"));

var _index5 = _interopRequireDefault(require("./friends/index"));

var _index6 = _interopRequireDefault(require("./setting/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Test: _index["default"],
  Sidebar: _index2["default"],
  Chart: _index3["default"],
  Friends: _index5["default"],
  Document: _index4["default"],
  Setting: _index6["default"]
};
exports["default"] = _default;