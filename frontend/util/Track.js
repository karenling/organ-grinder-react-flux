var KeyActions = require('../actions/KeyActions');

function Track(attrs) {
  this.attributes = attrs || { name: '', roll: [] };
}

Track.prototype = {
  startRecording: function() {
    this.attributes.roll = [];
    this.startTime = Date.now();
  },
  addNotes: function (notes) {
    var timeNote = { timeSlice: Date.now() - this.startTime };
    if (notes.length > 0) {
      timeNote.note = notes;
    }
    this.attributes.roll.push(timeNote);
  },
  stopRecording: function() {
    this.addNotes([]);
  },
  play: function() {
    if (this.interval) {
      return;
    } else {
      var playbackStartTime = Date.now();
      var currentNoteIdx = 0;
      var roll = this.attributes.roll;
      var delta;

      this.interval = setInterval(function() {
        if (currentNoteIdx < roll.length) {
          delta = Date.now() - playbackStartTime;
          if (delta >= roll[currentNoteIdx].timeSlice) {
            var notes = roll[currentNoteIdx].note || [];
            KeyActions.multipleKeys(notes)
            currentNoteIdx++;
          }
        } else {
          clearInterval(this.interval);
          delete this.interval;
        }
      }.bind(this), 1);
    }
  }
};

module.exports = Track;
