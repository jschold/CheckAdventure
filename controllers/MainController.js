checkAdventure.controller('MainCtrl', function MainCtrl($scope, MainFactory) {
    // $scope.helloConsole = dataService.helloConsole;
    $scope.list = MainFactory.list;
    $scope.MainFactory = MainFactory;
    // $scope.findItems= dataService.findItems();
    //
    // dataService.findItems(function(response) {
    //     $scope.todos = response.data;
    // });
})
