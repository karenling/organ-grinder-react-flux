var Store = require ("flux/utils").Store;
var dispatcher = require('../dispatcher/dispatcher');

var _tracks = [];
var TrackStore = new Store(dispatcher);

TrackStore.all = function() {
  return _tracks.slice();
};

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'ADD_TRACK':
      _tracks.push(payload.track);
      TrackStore.__emitChange();
      break;
    case 'DELETE_TRACK':
      var trackIdx = _tracks.indexOf(payload.track);
      if (trackIdx !== -1) {
        _tracks.splice(trackIdx, 1);
      }
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
