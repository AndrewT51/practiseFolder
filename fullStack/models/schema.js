var mongoose = require('mongoose');
var person = new mongoose.Schema({
	name: {type: String, required : true},
	age: Number,
	employed: {type: Boolean, default: false},
	sex: String
})

module.exports = mongoose.model('Person', person);
