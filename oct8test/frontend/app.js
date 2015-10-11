var myApp = angular.module('myApp',[])
.controller('mainCtrl',['$scope','$http', function($scope,$http){
	$scope.listOfPeople = [];

	$scope.sub = function(form){
		$scope.form='';

		$http.post('http://localhost:3000/addPerson',{
			name:form.name, 
			email: form.email, 
			age: form.age
		},function (err, success){
			if(err){
				console.log(err)
			}else{
				console.log(success)
			}
		})

	}

	$scope.collect = function(){
		$scope.listOfPeople=[];
		$http.get('http://localhost:3000/seeList')
			.then(function(res){
				for (var i =0; i< res.data.length; i++){
					$scope.listOfPeople.push(res.data[i])
				}
				
			}, function(err){
				console.log(err)
			})
	}

	$scope.remove = function(person){
		console.log(person)
		$http.post('http://localhost:3000/deletePerson', {uid:person})
	}

}])