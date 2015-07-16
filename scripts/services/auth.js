'use strict';
//------- super working code ------------

'use strict';

app.factory('Auth', ['$resource',
 function($resource) {

  return {
    newUser: $resource('/user', {},{method:'POST'}),
    
    login:  $resource('/login/:email/:pw', {},{method:'GET', isArray:false}),
    
    
  };
}]);


app.factory('User', function($http) {
	
	var currentUser = {};
	

	var User = {

		getCurrentUser: function(){
				   
				   console.log('get currentUser has:',currentUser)
				   return currentUser;
  },

  registerUser: function(user){
  	
  	return $http.post('/user', user)
  	//var newuser
  	//  $http.post('/user', user).success(function(user){
  	// 	console.log('api returned',user)
  	// 	newuser=user
  	// 	console.log('newuser is ',newuser);
  	// 	 });
  	// console.log('newuser is----',newuser)
  	// return newuser
  },
		

setCurrentUser: function(user) {

	// var cdate = new Date();
	// console.log('date is ',cdate)
	currentUser.name = user.name;
	currentUser.gravatar = user.gravatar
	currentUser.uid = user.uid
	currentUser.email = user.email
	currentUser.signedIn = user.signedIn
	


},

    isSignedIn: function() {
      if(currentUser.signedIn){return true}
      return false;
      },

    changePassword: function(payload) {
      return $http.post('/userpass',payload)
    }


      
  
}

return User;
});





// app.factory('Auth', function($resource) {

//   console.log('User factory loaded')



// return {


// register: function(user) {

//   var resource =  $resource('/user', {},
//     {
//         method: 'POST'
        
        
//     });
// console.log('register svc returned', resource)
// },

// login: function(email,pw){



// return $resource('/login', {},
//     {
//         'login': {method: 'POST', isArray:true}
        
//     });


// }

// }


// });





//------------working code -------------
// 'use strict';

// app.factory('User', function($resource) {

//   console.log('User factory loaded')


  
// return $resource('/user', {},
//     {
//         'newUser': {method: 'POST'},
//         'updateUser': { method:'PUT',params: {userId: '@id'} }
        
//     });
// //console.log('t1 is:', t1)
// });



// app.factory('Auth', function($resource) {

//   console.log('Auth factory loaded')
// return $resource('/login', {},
//     {
//         'login': {method: 'POST', isArray:true}
        
//     });

// });




