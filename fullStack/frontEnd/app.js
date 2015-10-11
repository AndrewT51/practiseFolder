var myApp = angular.module('myApp',[])

.controller('mainCtrl',['$scope','$http', function($scope,$http){

	$scope.sub = function(form){
		$http.post('http://localhost:3000/addPerson',{
			name:form.name, 
			age: form.age, 
			employed: form.cb,
			sex: form.sex
		},function (err, success){
			if(err){
				console.log(err)
			}else{
				console.log(success)
			}
		})

	}

	$scope.collect = function(){
		$http.get('http://localhost:3000/seePeople')
			.then(function(res){
				for (var i =0; i< res.data.length; i++){
					console.log(res.data[i].name)
				}
				
			}, function(err){
				console.log(err)
			})
	}

}])