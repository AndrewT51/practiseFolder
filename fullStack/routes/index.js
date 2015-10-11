var express = require('express');
var router = express.Router();
var Person = require('../models/schema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addPerson', function(req,res){
	if(!req.body.employed){req.body.employed = false};
	Person.create({
		name: req.body.name,
		age: req.body.age,
		employed: req.body.employed,
		sex: req.body.sex
	}, function(err, person){
		if(err){
			res.send(err)
		}else{
			console.log(person)
		}
	})
})

router.get('/seePeople', function(req,res){
	Person.find({}, function(err,thePerson){
		res.send(thePerson)
	}, function(err, success){
		if(err){
			console.log('err')
		}else{
			console.log('please wait')
		}
	})
})

module.exports = router;
