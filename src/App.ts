import * as THREE from "three";

export default class App {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  cube: THREE.Mesh;
  constructor() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const width = (canvas.width = 500);
    const height = (canvas.height = 500);

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    this.renderer.setSize(width, height);

    this.scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
  }

  Start() {
    this.tick();
  }

  tick() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame((n) => this.tick());
  }
}
