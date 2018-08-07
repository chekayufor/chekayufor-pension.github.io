
var pensionApp = angular.module('pensionApp', ['ngRoute', 'ngAnimate']);

pensionApp.controller('ScrollingController', ['$scope','$location','$anchorScroll','$routeParams', function($scope, $location, $anchorScroll, $routeParams) {
       
    $scope.scrollTo = function (id) {
        $anchorScroll(id);  
      }
  }]);

pensionApp.controller('ContactController', ['$scope', '$location','$http', function($scope, $location, $http) {
    
    
     $scope.sendEmail = function() {

        // var req = {
        //     method: 'POST',
        //     url: 'https://api.sendgrid.com/api/mail.send.json',
        //     headers: {
        //       'Authorization': 'Bearer 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',
        //       'Content-Type': 'Content-Type: application/json',
        //       'Access-Control-Allow-Origin': '*'
        //     },
        //     data: 'api_user=your_sendgrid_username&api_key=your_sendgrid_password&to=destination@example.com&toname=Destination&subject=Example_Subject&text=testingtextbody&from=info@domain.com'
        //   };
            

            
            console.log("TEST", $scope.email);

            //Request
            $http.post('http://localhost:3000/email', $scope.email) 
            .then(function onSuccess(response) {
                console.log("Sent ok");
            })
            .catch(function onError(responses) {
                console.log("Error");
            });

            $location.path("/contact-success");
        };

   
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
