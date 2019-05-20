import { WebGLRenderer, Scene, Camera } from "three";

export abstract class RenderedScene {
  private _scene: Scene;
  private _camera: Camera;

  constructor() {
    this._scene = this.setupScene();
    this._camera = this.setupCamera();
  }

  abstract setupScene(): Scene;
  abstract setupCamera(): Camera;
  abstract update(): void;

  public doRender(renderer: WebGLRenderer) {
    // Update the game!
    this.update();
    renderer.render(this._scene, this._camera);
  }
}
