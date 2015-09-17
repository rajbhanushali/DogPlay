app.service("sharedProperties", function(){
	var isLoggedIn = false;
	var firstName;
	var lastName;
	var emailaddr;
	var loginUID;

	return{
		setfname: function(fname){
			firstName = fname;
		},
		setlname: function(lname){
			lastName = lname;
		},
		setemail: function(email){
			emailaddr = email;
		},
		getfname: function(){
			return firstName;
		},
		getlname: function(){
			return lastName;
		},
		getemail: function(){
			return emailaddr;
		},
		setUID: function(uid){
			loginUID = uid;
		},
		getUID: function(){
			return loginUID;
		}
	};
});