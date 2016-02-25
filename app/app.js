'use strict';

angular.module('bowlingApp', [
  'ngRoute',
  'bowlingApp.view1',
  'bowlingApp.version',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])


