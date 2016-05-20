var React = require('react');
var TONES = require('../constants/Tones');
var Note = require('../util/Note');
KeyStore = require('../stores/KeyStore');

var OrganKey = React.createClass({
  getInitialState: function () {
    return {
      pressed: this.keyPressed()
    }
  },
  keyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },
  _onChange: function () {
    var pressed = this.keyPressed();
    if (pressed) {
      this.note.start()
    } else {
      this.note.stop()
    }

    this.setState({ pressed: pressed })
  },
  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
    this.note = new Note(TONES[this.props.noteName]);
  },
  componentWillUnmount: function () {
    KeyStore.remove(this._onChange());
  },
  render: function() {
    return(
      <div>{ this.props.noteName }</div>
    )
  }
})

module.exports = OrganKey;
