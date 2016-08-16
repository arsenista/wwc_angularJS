'use strict';

angular.module('blackjack', [
  'main',
  'profile',
  'game',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/profile', {
      templateUrl: 'modules/profile/templates/profile.html',
      controller: 'ProfileController'
    })
    .when('/game', {
      templateUrl: 'modules/game/templates/game.html',
      controller: 'GameController'
    })
    .when('/', {
      templateUrl: 'modules/main/templates/main.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});