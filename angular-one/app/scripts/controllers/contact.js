  'use strict';

  /**
   * @ngdoc function
   * @name angularOneApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularOneApp
   */
  angular.module('angularOneApp')
    .controller('ContactController', function ($scope) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS'
      ];
      var name = {
        firstName: 'First',
        lastName: 'Name'
      };
      $scope.name = name;
    });
