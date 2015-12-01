angular.module("togetApp", [])
.controller('mainCtrl', function($scope, dataService) {
    // $scope.helloWorld = function() {
    //     console.log("Hello there! This is the hello world controller function in the mainCtrl");
    // };
    $scope.helloConsole = dataService.helloConsole;
    $scope.findItems= dataService.findItems();

    dataService.findItems(function(response) {
        $scope.todos = response.data;
    });
})

.service('dataService', function($http) {
    this.helloConsole = function() {
        console.log(response.data);
        console.log('This is the hello console service!');
    };

    this.findItems = function(callback) {
        $http.get('Lists/getItems.json')
        .then(callback)
    }
    })
// });
