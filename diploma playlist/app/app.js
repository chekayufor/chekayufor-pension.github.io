
var pensionApp = angular.module('pensionApp', ['ngRoute', 'ngAnimate']);

pensionApp.controller('ScrollingController', ['$scope','$location','$anchorScroll','$routeParams', function($scope, $location, $anchorScroll, $routeParams) {
       
    $scope.scrollTo = function (id) {
        $anchorScroll(id);  
      }
  }]);

pensionApp.controller('ContactController', ['$scope', '$location','$http', function($scope, $location, $http) {
    
    
      $scope.sendEmail = function() {

                console.log("TEST");
            //Request
            $http.post('/email', $scope.email) 
            .then(function onSuccess(response) {
                console.log("Sent ok");
            })
            .catch(function onError(responses) {
                console.log("Error");
            });

            $location.path("/contact-success");
        };

        
// $http(...).
// then(function onSuccess(response) {
//   // Handle success
//   var data = response.data;
//   var status = response.status;
//   var statusText = response.statusText;
//   var headers = response.headers;
//   var config = response.config;
//   ...
// }).
// catch(function onError(response) {
//   // Handle error
//   var data = response.data;
//   var status = response.status;
//   var statusText = response.statusText;
//   var headers = response.headers;
//   var config = response.config;
//   ...
// });
    
    // $scope.sendEmail = function(form){
    //     console.log(form);
    //    $location.path("/contact-success");
    // };

   
  }]);

  
  
  pensionApp.controller('CalculateController', ['$scope', function($scope) {
    
    $scope.calculatePencion = function(){
        
        $scope.result = $scope.calculate.Zz * $scope.calculate.Kz * $scope.calculate.Cm * $scope.calculate.Bc;
    }
  }]);
  
//routeProvider
  pensionApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when('/home',{
        templateUrl: 'views/home.html'
    })
    .when('/view1',{
        templateUrl: 'views/view1.html'
    })
    .when('/view2',{
        templateUrl: 'views/view2.html',
        controller: 'ScrollingController'
    })
    .when('/view3',{
        templateUrl: 'views/view3.html',
        controller: 'CalculateController'
    })
    .when('/view4',{
        templateUrl: 'views/view4.html',
        controller: 'ContactController'
    })
    .when('/contact-success',{
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/home'
    })

   



}]);
