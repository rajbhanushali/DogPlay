app.factory("Auth", ["$firebaseAuth",
	function($firebaseAuth){
		var ref = new Firebase("https://dog-play.firebaseio.com");
		return $firebaseAuth(ref);
	}
]);
