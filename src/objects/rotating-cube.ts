import { SceneObject } from "scene-object";
import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { IObjectDefinition } from "scene-definition";

export interface IRotatingCubeDef extends IObjectDefinition {
  size: [number, number, number];
  color: number;
}

export class RotatingCube extends SceneObject<Mesh, IRotatingCubeDef> {
  create(def: IRotatingCubeDef): Mesh {
    const geometry = new BoxGeometry(...def.size);
    const material = new MeshBasicMaterial({ color: def.color });
    const cube = new Mesh(geometry, material);

    cube.position.copy(def.position);
    cube.rotation.copy(def.rotation);

    return cube;
  }

  spawn() {
    // No-op
  }

  tick() {
    this.node.rotation.x += 0.01;
    this.node.rotation.y += 0.01;
  }

  dispose() {
    this.node.geometry.dispose();
  }
}
