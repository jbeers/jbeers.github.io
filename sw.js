function displayNotification( title, options ){
	if( self.registration && self.registration.showNotification ){
		self.registration.showNotification( title, options );
		return;
	}

	new Notification( title, options );
}

self.addEventListener( 'activate', async function( e ){
	console.log( 'activated' )
	
	setTimeout(() => {
		displayNotification( 'Counter', { body: 'A push notification!' });
	}, 5000 );
	
	setTimeout(() => {
		displayNotification( 'Counter', { body: 'This one happened later!' });
	}, 55000 );
});

console.log( 'test' );
