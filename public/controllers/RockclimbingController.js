checkAdventure.controller('RockclimbingCtrl', function RockclimbingCtrl($scope) {
  $scope.gears = [
    {name: "Climbing Shoes"},
    {name: "Chalk Bag"},
    {name: "Chalk"},
  ]

  $scope.boulderings = [
    {name: "Crash Pad"},
  ]

  $scope.ropes = [
    {name: "Climbing Rope"},
    {name: "Harness"},
    {name: "Belay/Rappel Device"},
    {name: "Locking Caribiner"},
    {name: "Non-Locking Caribiner"}
  ]

  $scope.sports = [
    {name: "Climbing Rope"},
    {name: "Harness"},
    {name: "Belay/Rappel Device"},
    {name: "Locking Caribiner"},
    {name: "Non-Locking Caribiner"},
    {name: "Quick Draws"},
    {name: "Double Length Runner"},
    {name: "Static Rope/Webbing"}
  ]

  $scope.trads = [
    {name: "Climbing Rope"},
    {name: "Harness"},
    {name: "Rappel Device"},
    {name: "Set of Stoppers"},
    {name: "Set of Cams"},
    {name: "Small Cams"},
    {name: "Alpine Draws"},
    {name: "Cordolette"},
    {name: "Locking Caribiner"},
    {name: "Non-Locking Caribiner"},
    {name: "Quick Draws"},
    {name: "Double Length Runner"},
    {name: "Static Rope/Webbing"}
  ]

  $scope.ices = [
    {name: "Climbing Rope"},
    {name: "Harness"},
    {name: "Rappel Device"},
    {name: "Set of Stoppers"},
    {name: "Set of Cams"},
    {name: "Small Cams"},
    {name: "Alpine Draws"},
    {name: "Cordolette"},
    {name: "Locking Caribiner"},
    {name: "Non-Locking Caribiner"},
    {name: "Quick Draws"},
    {name: "Double Length Runner"},
    {name: "Webbing"},
    {name: "Ice Boots"},
    {name: "Crampons"},
    {name: "Ice Axes and Tools"},
    {name: "Ice Screws"},
  ]

  $scope.firstaids = [
    {name: "First Aid Kit"},
    {name: "First Aid Course"}
  ]

  $scope.nutritions = [
    {name: "Energy Foods"}
  ]

  $scope.hydrations = [
    {name: "Water bottles or hydration reservoirs"},
    {name: "Electrolyte Water"}
  ]

  $scope.partners = [
    {name: "A safe climbing buddy!"}
  ]


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
