var React = require('react');
var OrganKey = require('./OrganKey');
var TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function () {
    return(
      <div>
        { Object.keys(TONES).map(function(tone, idx) {
          return(<OrganKey key={ idx } noteName={ tone } >{ tone }</OrganKey>)
        })}
      </div>
    )
  }
})
module.exports = Organ;
