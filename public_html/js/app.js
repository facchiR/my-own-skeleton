var app = angular.module('register', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
        .when('/', { 
            //controller: 'HomeController', 
            templateUrl: 'views/home.html'
        })
        .when('/register', {
            controller: 'RegisterController', 
            templateUrl: 'views/register.html' 
        })
        .otherwise({
            redirectTo:'/'
        });
});

