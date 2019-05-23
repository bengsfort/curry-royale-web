import { SceneObject } from "scene-object";
import { PerspectiveCamera } from "three";
import { ICameraDefinition } from "scene-definition";

const FOV = 75;

export class GameplayCamera extends SceneObject<
  PerspectiveCamera,
  ICameraDefinition
> {
  create(def: ICameraDefinition): PerspectiveCamera {
    const camera = new PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight
    );
    camera.position.copy(def.position);
    camera.lookAt(def.lookAt);
    return camera;
  }

  spawn() {
    // No-op
  }
}
