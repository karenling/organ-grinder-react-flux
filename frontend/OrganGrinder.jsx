Keys = require('./util/KeyListener');
var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/Organ');
var TONES = require('./constants/Tones');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Organ />, document.getElementById('content'));
});
