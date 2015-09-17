'use strict';

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://dog-play.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.controller("SignupController", function($scope, sharedProperties, Auth, $firebaseObject, toaster) {
    console.log("SignupController loaded!");

      var ref = new Firebase("https://dog-play.firebaseio.com");
      $scope.createUser = function(user) {

      Auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(userData) {

      toaster.pop("success", "Signed up and ready to go!");

       var message = "User created with uid: " + userData.uid;
       console.log(message);

       ref.child("users").child(userData.uid).set({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
       });

      }).catch(function(error) {
        toaster.pop("warning", "Something went wrong! Error: " + error);
        var error = error;
        console.log(error)
      });
    
  

  };

});