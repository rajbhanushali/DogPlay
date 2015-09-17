app.controller("ProfileController", function($scope, sharedProperties, $rootScope){

	var ref = new Firebase("https://dog-play.firebaseio.com");
	var superref = new Firebase("https://dog-play.firebaseio.com/dogs")

	$scope.owner = {
		firstname: sharedProperties.getfname(),
		lastname: sharedProperties.getlname(),
		email: sharedProperties.getemail()
	};

	console.log($scope.owner);

	$scope.updateOwner = function(owner){
		console.log(owner);
		ref.child("users/" + sharedProperties.getUID()).update({
			firstname: owner.firstname,
			lastname: owner.lastname,
			email: owner.email,
			phoneno: owner.phoneno,
		});

	}
	var doggyIDName;
	$scope.updateDog = function(dog){
		console.log(dog);

		getLatLong(dog.address);

		ref.child("dogs").push({
			name: dog.nayme,
			breed: dog.breed,
			age: dog.age,
			imgURL: dog.imgurl,
			desc: dog.desc,
			ownerUID: sharedProperties.getUID(),
			address: dog.address,
			id: new Date().getTime()
		});
	
		ref.child("dogs").on('child_added', function(snapshot) {
		doggyIDName = snapshot.key();
		superref.child(doggyIDName).update({
			dogUID: doggyIDName
		});
		});
	}
		function getLatLong(address) {
		var geocoder = new google.maps.Geocoder();
		var latitude;
		var longitude;
		geocoder.geocode( { 'address': address}, function(results, status) {
		     if (status == google.maps.GeocoderStatus.OK) {
		     	console.log(results);
		         latitude = results[0].geometry.location.H;
		         longitude = results[0].geometry.location.L;
		     } else {
		         result = "Unable to find address: " + status;
		     }
		     storeResult(latitude, longitude);
		    });
		}

		function storeResult(la, lo){
			console.log(doggyIDName);
			superref.child(doggyIDName).update({
				latitude: la,
				longitude: lo
			
			});
		}

});
