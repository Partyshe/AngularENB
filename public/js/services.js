'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('myApp.services', [])
    .service('productsService', function ($http) {
        return {
            getProducts: function () {
                return $http.get('/api/products').success(function (data, status, headers, config) {
                    return Promise.resolve(data.products);
                })
            }
        };
    });
