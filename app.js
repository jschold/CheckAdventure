var checkAdventure = angular.module('checkAdventure', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate'
]);

checkAdventure.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'MainCtrl'
  });

  $stateProvider.state('backpacking', {
    url: "/#backpacking",
    templateUrl: "backpacking.html",
    // controller: 'MainCtrl'
  });

  $stateProvider.state('dayhiking', {
    url: "/#dayhiking",
    templateUrl: "partials/dayhiking.html",
    controller: 'MainCtrl'
  });

  $stateProvider.state('rockclimbing', {
    url: "/#rockclimbing",
    templateUrl: "partials/rockclimbing.html",
    controller: 'MainCtrl'
  });

  $stateProvider.state('mountaineering', {
    url: "/#mountaineering",
    templateUrl: "partials/mountaineering.html",
    controller: 'MainCtrl'
  });

  });
