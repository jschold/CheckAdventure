var checkAdventure = angular.module('checkAdventure', ['ui.router']);

checkAdventure.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'MainCtrl'
  });

  $stateProvider.state('backpacking', {
    url: "/#backpacking",
    templateUrl: "partials/backpacking.html",
    controller: 'MainCtrl'
  });

  });
