var checkAdventure = angular.module('checkAdventure', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate'
]);

checkAdventure.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html",
      controller: 'ModalCtrl'
    });

  $stateProvider.state('backpacking', {
    url: "/backpacking",
    templateUrl: "partials/backpacking.html",
    controller: 'BackpackingCtrl'
  });

  $stateProvider.state('dayhiking', {
    url: "/dayhiking",
    templateUrl: "partials/dayhiking.html",
    controller: 'DayhikingCtrl'
  });

  $stateProvider.state('rockclimbing', {
    url: "/rockclimbing",
    templateUrl: "partials/rockclimbing.html",
    controller: 'RockclimbingCtrl'
  });

  $stateProvider.state('mountaineering', {
    url: "/mountaineering",
    templateUrl: "partials/mountaineering.html",
    controller: 'MountaineeringCtrl'
  });

  });
