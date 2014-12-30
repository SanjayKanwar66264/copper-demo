'use strict';

angular.module('copperAminsuranceApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.awesomeThings = [];

        $scope.editing = false;
        $scope.switchStatus = false;

        $http.get('/api/things').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', { name: $scope.newThing });
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };
        $scope.editProduct = function () {
            $scope.editing = true;
        };

        $scope.doneEdit = function () {
            $scope.editing = false;
        };

        $scope.updateName = function (thing) {
            if ($scope.thing === '') {
                return;
            }
            $http.post('api/things/update/' + thing._id, thing).success(function () {
                return;
            });

        };

  /*      $scope.updateInfo = function (thing) {
            if ($scope.thing === '') {
                return;
            }
            $http.post('api/things/update/' + thing._id, thing).success(function () {
               return;
            });
        };

        function getAllThing() {
            $http.get('/api/things').success(function (awesomeThings) {
                $scope.awesomeThings = awesomeThings;
            });
        }*/
    });
