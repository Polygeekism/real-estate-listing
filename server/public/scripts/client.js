var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/listings',{
        templateUrl: 'views/listings.html',
        controller: 'ListingsController',
        controllerAs: 'vm'
    }).when('/rentals',{
        templateUrl: 'views/rentals.html',
        controller: 'RentalsController',
        controllerAs: 'vm'
    }).when('/', {
        templateUrl: 'views/home.html'
    })
}])