Keys = require('./util/KeyListener');
var React = require('react');
var ReactDOM = require('react-dom');
var OrganKey = require('./components/OrganKey');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<OrganKey noteName='C4'/>, document.getElementById('content'));
});
