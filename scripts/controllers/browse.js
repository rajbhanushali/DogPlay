'use strict';

app.controller("BrowseController", function($scope,$http, uiGmapGoogleMapApi){

	$scope.map = {
	center: {
	latitude: 37.763912,
	longitude: -121.8899834},
	zoom: 18 };

	$scope.marker = {
		id: 0,
		coords: {
			latitude: 37.763912,
			longitude: -121.8899834
		},
		show:false
	};


        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

        $scope.title = "Window Title!";
	

// $scope.dogs = [
// {"name": "Kaya", "address": "506 Adriatic Ct", "breed": "German Shepherd", "imgURL": "http://goo.gl/2gj0mo"},
// {"name": "Goldi", "address": "212 Melbrooke St", "breed": "Golden Retriever", "imgURL": "https://goo.gl/3nB2mN"},
// {"name": "Cotton", "address": "2649 Harpix Circle", "breed": "Spanish Poodle", "imgURL": "http://goo.gl/flHdC6"},
// {"name": "Buster", "address": "432 Donald Road", "breed": "Malamute", "imgURL": "https://goo.gl/Vdlt2c"},
// {"name": "Martin", "address": "434 Bhavesh Road", "breed": "Terrier", "imgURL": "http://goo.gl/P9wWAl"},
// {"name": "Ashley", "address": "438 Ambavadi Road", "breed": "Eskimo", "imgURL": "https://goo.gl/Vdlt2c"},
// {"name": "Gomti", "address": "430 Kapoor Road", "breed": "Cow", "imgURL": "http://goo.gl/RxYqV2"},
// {"name": "Frosty", "address": "338 Tilak Road", "breed": "Boxer", "imgURL": "http://bit.ly/1Iaqrdn"},
// {"name": "Master", "address": "538 Sarkar Road", "breed": "Girffon", "imgURL": "http://bit.ly/1e7jDkl"},
// {"name": "Junior", "address": "138 Parle Road", "breed": "Chihuahua", "imgURL": "https://goo.gl/Vdlt2c"},
// {"name": "Franky", "address": "738 Sagar St", "breed": "Shitsu", "imgURL": "http://bit.ly/1Su0A1q"},
// {"name": "Woofers", "address": "438 Sonia Road", "breed": "Boston Terrier", "imgURL": "http://goo.gl/P9wWAl"},
// {"name": "Leo", "address": "298 Gandhi Road", "breed": "Spitz", "imgURL": "https://goo.gl/Vdlt2c"}
// ];

console.log('dogs---',$scope.dogs)


$http.get('/dogs').success(function(data){
 	console.log('dogs http---',data)
 	$scope.dogs = data;
 })

