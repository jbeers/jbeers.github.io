let counter = 0;

function displayNotification( title, options ){
	if( self.registration && self.registration.showNotification ){
		self.registration.showNotification( title, options );
		return;
	}

	new Notification( title, options );
}

self.addEventListener( 'activate', async function( e ){
	console.log( 'activated' )
	
	setInterval(() => {
		displayNotification( 'Counter', { body: 'The counter is now: ' + counter });
		counter += 1;
	}, 5000 );
});

console.log( 'test' );
