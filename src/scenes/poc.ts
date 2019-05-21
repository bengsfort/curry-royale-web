import { RenderedScene } from "./rendered-scene";
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
} from "three";

export class PocScene extends RenderedScene {
  private _cube!: Mesh;

  constructor() {
    super();
    window.__SCENE__ = this;
  }

  setupScene(): Scene {
    const scene = new Scene();

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    this._cube = cube;

    scene.add(cube);
    return scene;
  }

  setupCamera(): PerspectiveCamera {
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );
    camera.position.z = 5;
    return camera;
  }

  update(): void {
    this._cube.rotation.x += 0.01;
    this._cube.rotation.y += 0.01;
  }
}
