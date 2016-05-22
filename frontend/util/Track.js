function Track(attrs) {
  this.attributes = attrs || { name: '', roll: [] };
}

Track.prototype = {
  startRecording: function() {
    this.attributes.roll = [];
    this.startTime = Date.now();
  },
  addNotes: function (notes) {
    var timeNote = { timeSlice: Date.now() - this.startTime }
    if (notes.length > 0) {
      timeNote.note = notes;
    };
    this.attributes.roll.push(timeNote);
  },
  stopRecording: function() {
    this.addNotes([]);
  }
};

module.exports = Track;
