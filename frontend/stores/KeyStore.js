var Store = require ("flux/utils").Store;
var dispatcher = require('../dispatcher/dispatcher');

var _keys = [];
var KeyStore = new Store(dispatcher);

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  var idx = _keys.indexOf(payload.key);
  switch(payload.actionType) {
    case 'ADD_KEY':
      if (idx === -1) {
        _keys.push(payload.key);
        KeyStore.__emitChange();
        console.log(_keys); // TODO cleanup
      }
      break;
    case 'REMOVE_KEY':
      if (idx !== -1) {
        _keys.splice(idx);
        KeyStore.__emitChange();
      }
      break;
  }
};

module.exports = KeyStore;
