'use strict';

app.controller("BrowseController", function($scope, $http, uiGmapGoogleMapApi, $firebaseObject, sharedProperties) {

    var ref = new Firebase("https://dog-play.firebaseio.com/");
    var dogs;
    $scope.data = $firebaseObject(ref);
    $scope.data.$loaded()
        .then(function() {
            console.log($scope.data.dogs);

            $scope.dogs = $scope.data.dogs;

        


            //below is code for updating the map to the user's general location

            var userLat, userLon;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    userLat = position.coords.latitude;
                    userLon = position.coords.longitude;
                    console.log(userLat + ", " + userLon);
                    updateMap(userLat, userLon);
                });
            }

            function updateMap(lat, lon) {
                $scope.map = {
                    center: {
                        latitude: lat,
                        longitude: lon
                    },
                    zoom: 13
                };
            }


            $scope.map = {
                center: {
                    latitude: google.loader.ClientLocation.latitude,
                    longitude: google.loader.ClientLocation.longitude
                },
                zoom: 13
            };




            $scope.show = false;


            $('#myModal').on('show.bs.modal', function(event) {

                var button = $(event.relatedTarget);
                var recipient = button.data('id');
                var email;
                console.log("click ID - " + recipient);

                    ref.child("users/" + $scope.dogs[recipient].ownerUID + "/email").once("value", function(snapshot){
                        email = snapshot.val()
                    });

                var modal = $(this);
                modal.find('.modal-title').text($scope.dogs[recipient].name);
                document.getElementById("dogimage").src = $scope.dogs[recipient].imgURL;
                console.log($scope.dogs[recipient].imgURL);
                modal.find('.dogdesc').text($scope.dogs[recipient].desc);
                
                modal.find('.dogaddr').text($scope.dogs[recipient].address);

                modal.find('.dogbreed').text($scope.dogs[recipient].breed);

                modal.find('.dogemail').text(email);

            })


        });

});