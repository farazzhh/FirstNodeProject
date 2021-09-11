var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name
};

util.inherits(Person,events.EventEmitter)