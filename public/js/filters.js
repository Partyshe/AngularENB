'use strict';

/* Filters */

angular.module('myApp.filters', [])
    .filter('myLimitTo', function () {
        return function (input, limit, begin) {
            return input.slice(begin, begin + limit);
        };
    });
