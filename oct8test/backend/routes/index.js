var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Person = require('../models/person.schema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addPerson', function(req,res){
	Person.create({
		name: req.body.name,
		email: req.body.email,
		age: req.body.age
	},function(err, thePerson){
		if(err){
			console.log(err);
		}else{
			console.log(thePerson);
			res.send('Success')
		}
	})
})

router.get('/seeList', function(req,res){
	Person.find({},function(err, theList){
		if(err){
			console.log(err);
		}else{
			console.log(theList);
			res.send(theList)
		}
	})
})

router.post('/deletePerson', function(req,res){
	console.log(req.body);
	Person.findByIdAndRemove(req.body.uid, function(err, deletedPerson){
		res.send(deletedPerson)
	})
})







module.exports = router;
