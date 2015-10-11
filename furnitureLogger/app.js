var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', function($scope,shareDataService){
	$scope.whichRoom;
	$scope.roomObj = {};
	$scope.rooms=[];


	$scope.addRoom = function(room){
		$scope.rooms.push(room);
		shareDataService.addList(room);
		$scope.room = '';
	}

	$scope.addToRoom = function(item){
		if (!$scope.roomObj[$scope.whichRoom]){
			$scope.roomObj[$scope.whichRoom] = [];
		}
		$scope.roomObj[$scope.whichRoom].push(item);
		for (var i = 0; i < $scope.roomObj[$scope.whichRoom].length; i++){
			console.log($scope.roomObj[$scope.whichRoom][i])
		}

	}
})

myApp.controller('SecondCtrl',function($scope,shareDataService){
	$scope.rooms = shareDataService.getList();
	console.log($scope.rooms);

	
})

myApp.service('shareDataService', function() {
    var theList = [];

    var addList = function(newObj) {
        theList.push(newObj);
    }

    var getList = function(){
        return theList;
    }

    return {
        addList: addList,
        getList: getList
    };
});
