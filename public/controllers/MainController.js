checkAdventure.controller("MainCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://checkadventure.firebaseio.com/");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "check");
  // create an instance of the authentication service
  // var auth = $firebaseAuth(ref);
});
