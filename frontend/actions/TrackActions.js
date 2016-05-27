var dispatcher = require('../dispatcher/dispatcher');

var TrackActions = {
  addTrack: function(track) {
    dispatcher.dispatch({
      actionType: 'ADD_TRACK',
      track: track
    });
  },
  deleteTrack: function(track) {
    dispatcher.dispatch({
      actionType: 'DELETE_TRACK',
      track: track
    });
  },
  resetTracks: function(tracks) {
    dispatcher.dispatch({
      actionType: 'RESET_TRACKS',
      tracks: tracks
    })
  }
};

module.exports = TrackActions;
