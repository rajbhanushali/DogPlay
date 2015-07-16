'use strict';

app.controller('ItemController', function($scope, $location, toaster, Item,Items,getItems, Auth) {

	$scope.$on('userEvent', function(_,user){
		$scope.currentUID = user.uid
		});

	$scope.createItem = function(item) {
		var newItem = {p1:item.title,p2:item.desc,p3:$scope.currentUID,p4:'available',p5:item.price}
		console.log('newitem is ',newItem)
		var data = getItems.createItem(newItem)
		console.log('getItems returned',data)
			toaster.pop('success', 'Item created successfully.')
			$scope.newitem = ''
			$location.path('/browse')

		};
		

	$scope.editItem = function(item) {
		console.log('recd from partial--',item)
		var url = '/item/' + item.ITEM_ID
		console.log('url--',url)
		var payload = {p1:item.ITEM_TITLE,p2:item.ITEM_DESC,p3:item.ITEM_BOUGHT_BY,p4:item.ITEM_PRICE,p5:item.ITEM_STATUS}
		console.log('payload',payload)
		//getItems.setSelectedItem(item)
		getItems.updateItemArray(item)
		getItems.editItem(url,payload).success(function(status) {
			console.log('status is --',status)

			//console.log('getSelectedItem is --',getItems.getSelectedItem)		
			toaster.pop('success', "Item is updated.");
			$location.path('/browse/'+ item.ITEM_ID)
		})
	};

//NOTE: $scope.cancelItem is part of browseController and is in browse.js

	
}); 