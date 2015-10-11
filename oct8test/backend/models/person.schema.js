var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	age: {type: Number, required:false}
})


module.exports = mongoose.model('Person', PersonSchema);