// fetch, create, destroy tracks
var TrackActions = require('../actions/TrackActions');
var Track = require('../util/Track');

var TrackApiUtil = {
  fetchTracks: function() {
    $.ajax({
      type: 'GET',
      url: '/api/tracks',
      success: function(tracksPayload) {
        var tracks = tracksPayload.map(function(track) {
          return new Track(track);
        });
        TrackActions.resetTracks(tracks);
      }
    });
  },
  createTrack: function(track) {
    $.ajax({
      type: 'POST',
      dataType: 'JSON',
      contentType: 'application/json',
      url: 'api/tracks',
      data: JSON.stringify({track: track.attributes}),
      success: function(track) {
        var newTrack = new Track(track);
        TrackActions.addTrack(newTrack);
      }
    });
  }
};

module.exports = TrackApiUtil;
