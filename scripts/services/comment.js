'use strict'; 


app.factory('Comment', function($resource) {

	console.log('Comment factory loaded')
return $resource('/comment/:itemId', {},
    {
        'addComment': {method: 'POST'},
        'findComments': {method: 'GET', isArray:true},
        'deleteComment': {method: 'DELETE',params: {taskId: '@id'}}
        
        
    });
//console.log('t1 is:', t1)
});