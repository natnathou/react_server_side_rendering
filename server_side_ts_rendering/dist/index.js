"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var Home = require('./client/components/Home').default;
var app = express_1.default();
app.get('/', function (req, res) {
    var content = renderToString(React.createElement(Home, null));
    res.send(content);
});
app.listen(3000, function () {
    console.log('server is running on port 3000');
});
