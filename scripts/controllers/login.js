'use strict';

app.controller("LoginController", function($scope, toaster, sharedProperties, $rootScope) {
    console.log("LoginController loaded!");

   var ref = new Firebase("https://dog-play.firebaseio.com");

    $scope.loginUser = function(user) {
        console.log("email is " + user.email + " , pass is " + user.password);
        try {
            ref.authWithPassword({
                email: user.email,
                password: user.password
            }, function(error, authData) {
                if (error) {
                    console.log("shit");
                    toaster.pop('warning', "Uh-oh!", "Something went wrong. Try again!");
                } else {
                    //alert("Authenticated successfullly with payload:" + authData);
                    toaster.pop('success', "Hooray!", "You have successfully logged in.");
                    sharedProperties.setUID(authData.uid);

                    ref.child("users/" + authData.uid + "/firstname").once("value", function(snapshot){
                        sharedProperties.setfname(snapshot.val());
                        $rootScope.logname = "Logged in as " + snapshot.val();
                    });
                    ref.child("users/" + authData.uid + "/lastname").once("value", function(snapshot){
                        sharedProperties.setlname(snapshot.val());
                    });
                    ref.child("users/" + authData.uid + "/email").once("value", function(snapshot){
                        sharedProperties.setemail(snapshot.val());
                    });

                }
            });
        } catch (err) {
            toaster.pop("warning", "Oops!", "Please enter your email and password");
            sharedProperties.setStatus(false);
        }


}

$scope.googleAuth = function(){
ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $rootScope.logname = "Logged in as " + authData.google.cachedUserProfile.given_name;
    console.log(authData.google.cachedUserProfile.given_name);
    console.log(authData.google.email);
    sharedProperties.setfname(authData.google.cachedUserProfile.given_name);
    sharedProperties.setlname(authData.google.cachedUserProfile.family_name);
    sharedProperties.setemail(authData.google.email);
    ref.child("users/" + authData.uid).set({
            firstname: sharedProperties.getfname(),
            lastname: sharedProperties.getlname(),
            email: authData.google.email
        });
    sharedProperties.setUID(authData.uid);
    window.location.replace("#/profile");
  }
},{scope:"email"});
}

$scope.facebookAuth = function(){

    var ref = new Firebase("https://dog-play.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
        console.log("Login Failed!", error);
    } else {
        console.log("Authenticated successfully with payload:", authData);
        
        $rootScope.logname = "Logged in as " + authData.facebook.cachedUserProfile.first_name;
        sharedProperties.setfname(authData.facebook.cachedUserProfile.first_name);
        sharedProperties.setlname(authData.facebook.cachedUserProfile.last_name);

        if(authData.facebook.email){
            sharedProperties.setemail(authData.facebook.email);
            ref.child("users/" + authData.uid).update({
                firstname: sharedProperties.getfname(),
                lastname: sharedProperties.getlname(),
                email: authData.facebook.email
            });
        }
        else{
        ref.child("users/" + authData.uid).set({
            firstname: sharedProperties.getfname(),
            lastname: sharedProperties.getlname()
        });
                 }
        sharedProperties.setUID(authData.uid);
        window.location.replace("#/profile");
    }

    });
}

});