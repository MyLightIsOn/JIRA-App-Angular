'use strict';

angular.module('jiraViewerApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('data/projects.json').success(function(data) {
            $scope.projects = data;
        });
    });
