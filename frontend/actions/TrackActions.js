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
  }
};

module.exports = TrackActions;
