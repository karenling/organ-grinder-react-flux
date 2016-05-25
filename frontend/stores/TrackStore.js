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
  }
};

module.exports = TrackStore;
