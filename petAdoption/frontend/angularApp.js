var petApp = angular.module('petApp',['ui.router']);

petApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'HomeCtrl'

  })
  .state('test', {
    url: '/test',
    templateUrl: './views/test.html',
    controller: 'MainCtrl'

  })
    .state('error', {
    url: '/error',
    templateUrl: './views/error.html',
    controller: 'MainCtrl'

  })
})

.service('UserService', function($http){


})


petApp.controller('HomeCtrl', function($scope){


})

petApp.controller('MainCtrl',function($scope, $http,$state){
  $scope.login = function(){
    $http.post('http://localhost:3000/register',{
      username: $scope.user.name,
      password: $scope.user.password

    }).then(function successCallback(response){
      console.log(response);
      if(response.data === 'success'){
        $state.go('test')
      }else{
         $state.go('error')
      }

    }, function errorCallback(response){
      console.log(response)
     

    });

    console.log($scope.user)
  }

  
})

