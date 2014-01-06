'use strict';

angular.module('jiraViewerApp').factory('userRepository', function($http) {
    return {
        getData: function(){
            return $http.get('data/projects.json');
        }
    };
});