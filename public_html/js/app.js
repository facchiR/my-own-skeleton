
var app = angular.module('register', ['ngRoute']);
app.conf=function ($routeProvider) { 
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
      redirectTo: '/' 
    }); 
};
app.config(app.conf);
app.constant("swInfo", {
    "version": "1.0.1"
});
app.constant("URL", {
    "REST": "server"
});


