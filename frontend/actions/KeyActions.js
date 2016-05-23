var dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  addKey: function (key) {
    dispatcher.dispatch({
      actionType: 'ADD_KEY',
      key: key
    });
  },
  removeKey: function (key) {
    dispatcher.dispatch({
      actionType: 'REMOVE_KEY',
      key: key
    });
  },
  multipleKeys: function(keys) {
    dispatcher.dispatch({
      actionType: 'MULTIPLE_KEYS',
      keys: keys
    });
  }
};

module.exports = KeyActions;
