import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Assurez-vous d'importer depuis le bon chemin

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // Définit la couleur de fond en blanc
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();

loader.load("./bahraya.gltf", function (gltf) {
    // Ajustez la position, la rotation ou l'échelle du modèle chargé si nécessaire
    gltf.scene.position.set(0, 0, 0);
  // Rotation d'un demi-cercle autour de l'axe y (180 degrés ou PI radians)
   gltf.scene.rotation.set(0, Math.PI, -45);

    gltf.scene.scale.set(1, 1, 1);

    scene.add(gltf.scene);
});


// Définir la position de la caméra
camera.position.set(20, 30, 0);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});
