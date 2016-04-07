'use strict';

(function () {
    angular.module('myApp', [
            'myApp.filters',
            'myApp.services',
            'myApp.directives',
            'myApp.controllers'
        ])
        .config(configFunction);

    function configFunction($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index',
            controller: 'IndexCtrlFunction'
        });

        $locationProvider.html5Mode(true);
    }

    configFunction.$inject = ['$routeProvider', '$locationProvider'];
})();