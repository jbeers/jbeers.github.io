var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( {antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById( 'threewrapper' ).appendChild( renderer.domElement );

var geometry = new THREE.OctahedronGeometry( 1, 0 );
var material = new THREE.MeshPhongMaterial( {
	color: 0x00ff00,
	emissive: 0x072534,
	side: THREE.DoubleSide,
	shading: THREE.FlatShading
} );
var cube = new THREE.Mesh( geometry, material );

var increment = Math.PI / 200;

scene.add( cube );

var orbit = new THREE.OrbitControls( camera, renderer.domElement );
orbit.enableZoom = false;
var lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );


camera.position.z = 5;
camera.position.y = 1.8;
camera.rotation.x = -Math.PI / 8;

function render() {
	cube.rotation.y += increment;
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();
