checkAdventure.controller('MainCtrl', function MainCtrl($scope, MainFactory) {
    $scope.helloConsole = dataService.helloConsole;
    $scope.list = MainFactory.list;
    $scope.MainFactory = MainFactory;
    $scope.findItems= dataService.findItems();

    dataService.findItems(function(response) {
        $scope.todos = response.data;
    });
})

checkAdventure.controller('AccordionDemoCtrl', function ($scope) {
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
});
