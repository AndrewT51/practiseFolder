var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', function($scope,shareDataService){
	$scope.whichRoom;
	$scope.roomObj = {};
	$scope.rooms=[];


	$scope.addRoom = function(room){
		$scope.rooms.push(room);
		// shareDataService.addList(room);
		$scope.room = '';
	}

	$scope.addToRoom = function(item){
		if (!$scope.roomObj[$scope.whichRoom]){
			$scope.roomObj[$scope.whichRoom] = [];
		}
		$scope.roomObj[$scope.whichRoom].push(item);
		for (var i = 0; i < $scope.roomObj[$scope.whichRoom].length; i++){
			// console.log($scope.roomObj[$scope.whichRoom][i])
		}
    shareDataService.sharedObj = $scope.roomObj;
    console.log($scope.roomObj + 'Object')
    debugger;

	}
})

myApp.controller('SecondCtrl',function($scope,shareDataService){
  $scope.changeRoom = function(){
    console.log('Blah' + shareDataService.sharedObj);
  	$scope.rooms = shareDataService.sharedObj;
    
  }
	console.log($scope.rooms);

	
})

myApp.service('shareDataService', function() {
    var sharedObj;
    console.log('PreList');

    // var writeUpdate= function(updatedObj){
    //   sharedObj=updatedObj;
    //   return sharedObj;

    // }

    // var addList = function(newObj) {
    //     theList.push(newObj);
    //     console.log("THE LIST:" + theList)
    // }

    var getUpdate = function(){
      // console.log('GetList')
        return sharedObj;
    }
    return sharedObj;

    // return {
    //     addList: addList,
    //     getList: getList
    // };
});
