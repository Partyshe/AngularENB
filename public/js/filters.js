'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }).filter('myLimitTo', function() {
  return function(input, limit, begin) {
    return input.slice(begin, begin + limit);
  };
});
