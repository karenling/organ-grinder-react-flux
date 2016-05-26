var React = require('react');

var TrackPlayer = React.createClass({
  playTrack: function() {
    this.props.track.play();
  },
  handleDelete: function() {
    this.props.deleteTrack(this.props.track)
  },
  render: function() {
    return(
      <div>
        { this.props.track.attributes.name }
        <input type='submit' onClick={ this.playTrack } value='Play'></input>
        <input type='submit' onClick={ this.handleDelete } value='Delete'></input>
      </div>
    )
  }
});

module.exports = TrackPlayer;
