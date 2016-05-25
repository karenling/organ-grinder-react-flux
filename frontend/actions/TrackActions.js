var dispatcher = require('../dispatcher/dispatcher');

var TrackActions = {
  addTrack: function(track) {
    dispatcher.dispatch({
      actionType: 'ADD_TRACK',
      track: track
    });
  }
};

module.exports = TrackActions;
