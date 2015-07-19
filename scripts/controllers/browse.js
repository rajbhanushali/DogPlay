'use strict';

app.controller("BrowseController", function($scope, uiGmapGoogleMapApi){

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
	

});
