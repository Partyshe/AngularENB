'use strict';

/* Controllers */

angular.module('myApp.controllers', [
        'myApp.services'
    ])
    .controller('IndexCtrl', IndexCtrlFunction);

function IndexCtrlFunction($scope, productsService) {
    $scope.countSections = function () {
        if (!$scope.products) {
            return;
        }

        var amountOfSections = Math.ceil($scope.products.length / 3);
        return new Array(amountOfSections);
    };

    $scope.limitToStartIndex = function (curIndex) {
        return curIndex * 2 + curIndex;
    };

    productsService.getProducts()
        .then(function (response) {
            $scope.products = response.data.products;
        });
};