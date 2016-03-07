'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('siteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/annonces.html',
        controller: 'annoncesCtrl',
        controllerAs: 'annoncesCtrl'
      })
      .when('/ventes', {
        templateUrl: 'views/ventes.html',
        controller: 'annoncesCtrl',
        controllerAs: 'annoncesCtrl'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'annoncesCtrl',
        controllerAs: 'annoncesCtrl'
      })
      .when('/terrains', {
        templateUrl: 'views/terrains.html',
        controller: 'annoncesCtrl',
        controllerAs: 'annoncesCtrl'
      })
       .when('/conseils', {
        templateUrl: 'views/conseils.html',
        controller: 'annoncesCtrl',
        controllerAs: 'annoncesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
