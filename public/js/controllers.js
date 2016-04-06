'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('AppCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/name'
    }).success(function (data, status, headers, config) {
        $scope.name = data.name;
    }).error(function (data, status, headers, config) {
        $scope.name = 'Error!';
    });

}).controller('MyCtrl1', function ($scope) {
    // write Ctrl here

}).controller('MyCtrl2', function ($scope) {
    // write Ctrl here

});

function IndexCtrl($scope, $http) {
    console.log("IndexCtrl Start");

    $scope.countSections = function (){
        if(!$scope.projects){
            return;
        }

        var amountOfSections = Math.ceil($scope.projects.length/3);
        return new Array(amountOfSections);
    };

    $scope.limitToStartIndex = function (curIndex) {
        return curIndex*2 + curIndex;
    };

    $http.get('/api/projects').success(function (data, status, headers, config) {
        console.log("IndexCtrl @get Success");

        $scope.projects = data.projects;

        console.log($scope.projects);
    });

    console.log("IndexCtrl End");
}

function AddPostCtrl($scope, $http, $location) {
    console.log('AddPostCtrl Start.');

    $scope.form = {};
    $scope.submitPost = function () {
        console.log('AddPostCtrl @submitPost Start.');

        $http.post('/api/post', $scope.form)
            .success(function (data) {
                console.log('AddPostCtrl @submitPost @post Success.');

                $location.path('/');
            });
    };

    console.log("AddPostCtrl End");
}

function ReadPostCtrl($scope, $http, $routeParams) {
    console.log('ReadPostCtrl Start. $routeParams.id = ' + $routeParams.id);

    $http.get('/api/post/' + $routeParams.id)
        .success(function (data) {
            console.log('ReadPostCtrl @get Success.');

            $scope.post = data.post;
        });

    console.log("ReadPostCtrl End");
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
    console.log('EditPostCtrl Start.');

    $scope.form = {};
    $http.get('/api/post/' + $routeParams.id)
        .success(function (data) {
            console.log('EditPostCtrl @get Success.');

            $scope.form = data.post;
        });

    $scope.editPost = function () {
        console.log('EditPostCtrl @editPost Start.');

        $http.put('/api/post/' + $routeParams.id, $scope.form)
            .success(function (data) {
                console.log('EditPostCtrl @editPost @put Success.');

                $location.url('/readPost/' + $routeParams.id);
            });
    };

    console.log("EditPostCtrl End");
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
    console.log('DeletePostCtrl Start.');

    $http.get('/api/post/' + $routeParams.id)
        .success(function (data) {
            console.log('DeletePostCtrl @get Success.');

            $scope.post = data.post;
        });

    $scope.deletePost = function () {
        console.log('DeletePostCtrl @deletePost Start.');

        $http.delete('/api/post/' + $routeParams.id)
            .success(function (data) {
                console.log('DeletePostCtrl @deletePost @delete Success.');

                $location.url('/');
            });
    };

    $scope.home = function () {
        console.log('DeletePostCtrl @home Start.');

        $location.url('/');
    };

    console.log("DeletePostCtrl End");
}