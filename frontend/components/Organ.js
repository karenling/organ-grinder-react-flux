var React = require('react');
var OrganKey = require('./OrganKey');
var Recorder = require('./Recorder');
var TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function () {
    return(
      <div>
        { Object.keys(TONES).map(function(tone, idx) {
          return(<OrganKey key={ idx } noteName={ tone } >{ tone }</OrganKey>)
        })}
        <Recorder></Recorder>
      </div>
    )
  }
})
module.exports = Organ;
