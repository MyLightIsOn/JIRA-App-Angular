'use strict';

angular.module('jiraViewerApp')
    .controller('MainCtrl', function ($scope, userRepository) {
        $scope.projects = [];

        var dataRetrieved = function(data){
            $scope.projects = data;
        };

        userRepository.getData().success(dataRetrieved);
    });


