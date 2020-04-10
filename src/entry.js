import { WebGLRenderer,
    PerspectiveCamera,
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    LineBasicMaterial,
    Vector3,
    BufferGeometry,
    Line
} from 'three';

 import css from './style.css';

var scene = new Scene();
var camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 500);

var renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var geometry = new BoxGeometry();
// var material = new MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new Mesh(geometry, material);

// scene.add(cube);

// camera.position.z = 5;

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// create a blue LineBasicMaterial
var material = new LineBasicMaterial({ color: 0x0000ff });

var points = [];
points.push(new Vector3(-10, 0, 0))
points.push(new Vector3(0, 10, 0))
points.push(new Vector3(10, 0, 0))

var geometry = new BufferGeometry().setFromPoints(points);

var line = new Line(geometry, material)
scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
    renderer.render(scene, camera);
}

// if ( WEBGL.isWebGLAvailable() ) {
	animate();
// } else {
// 	var warning = WEBGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );
// }