var $ = require('jquery');
var KeyActions = require('../actions/KeyActions');


$(function() {
  var mapping = {
    65: 'C4',
    83: 'C5',
    68: 'C6',
    70: 'C7',
    67: 'C8'
  };
  $(document).keydown(function (e) {
    key = mapping[e.keyCode];
    if (key === undefined) {
      return;
    }
    KeyActions.addKey(key);
  });

  $(document).keyup(function(e) {
    key = mapping[e.keyCode];
    if (key === undefined) {
      return;
    }
    KeyActions.removeKey(key);
  });
});
