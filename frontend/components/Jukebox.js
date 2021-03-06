var React = require('react');
var TrackPlayer = require('./TrackPlayer');
var TrackStore = require('../stores/TrackStore');
var TrackActions = require('../actions/TrackActions');
var TrackApiUtil = require('../util/TrackApiUtil');

var Jukebox = React.createClass({
  getInitialState: function() {
    return{
      tracks: TrackStore.all()
    }
  },
  _onChange: function() {
    this.setState({ tracks: TrackStore.all() })
  },
  deleteTrack: function(track) {
    TrackApiUtil.deleteTrack(track);
  },
  componentDidMount: function() {
    TrackApiUtil.fetchTracks();
    TrackStore.addListener(this._onChange)
  },
  render: function() {
    return(
      <div>
        { this.state.tracks.map(function(track, idx) {
          return(
            <TrackPlayer key={ idx } track={ track } deleteTrack={ this.deleteTrack }></TrackPlayer>
          )
        }.bind(this))}
      </div>
    )
  }
});

module.exports = Jukebox;
