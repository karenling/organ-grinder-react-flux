var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');
var TrackActions = require('../actions/TrackActions');
var TrackStore = require('../stores/TrackStore');

var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      Track: new Track()
    }
  },
  startRecording: function() {
    this.setState({ isRecording: true });
    this.state.Track.startRecording();
  },
  stopRecording: function() {
    this.setState({ isRecording: false })
    this.state.Track.stopRecording();
  },
  playTrack: function() {
    this.state.Track.play();
  },
  saveTrack: function() {
    TrackActions.addTrack(this.state.Track);
  },
  _onChange: function () {
    var keys = KeyStore.all();
    if (this.state.isRecording) {
      this.state.Track.addNotes(keys);
    }
  },
  componentDidMount: function () {
    KeyStore.addListener(this._onChange);
  },
  render: function() {
    return(
      <div>
        <input type='submit' onClick={ this.startRecording } value='Start Recording'></input>
        <input type='submit' onClick={ this.stopRecording } value='Stop Recording'></input>
        <br/>
        <input type='submit' onClick={ this.playTrack } value='Play Recording'></input>
        <input type='submit' onClick={ this.saveTrack } value='Save Recording'></input>
      </div>
    )
  }
})

module.exports = Recorder;
