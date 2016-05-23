var Store = require ("flux/utils").Store;
var dispatcher = require('../dispatcher/dispatcher');
var OrganKey = require('../components/OrganKey');

var _keys = [];
var KeyStore = new Store(dispatcher);

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'ADD_KEY':
      var idx = _keys.indexOf(payload.key);
      if (idx === -1) {
        _keys.push(payload.key);
        KeyStore.__emitChange();
        console.log(_keys); // TODO cleanup
      }
      break;
    case 'REMOVE_KEY':
      var idx = _keys.indexOf(payload.key);
      if (idx !== -1) {
        _keys.splice(idx);
        KeyStore.__emitChange();
      }
      break;
    case 'MULTIPLE_KEYS':
      _keys = payload.keys.slice();
      KeyStore.__emitChange();
      break;
  }
};

module.exports = KeyStore;
