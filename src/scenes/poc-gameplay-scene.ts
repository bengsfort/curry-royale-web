import { ISceneDefinition } from "scene-definition";
import { GameplayCamera } from "cameras";
import { Vector3, Euler } from "three";
import { IRotatingCubeDef, RotatingCube } from "objects";

export const POC_GAMEPLAY_SCENE: ISceneDefinition = {
  camera: {
    lookAt: new Vector3(0, 0, 0),
    position: new Vector3(0, 0, 5),
    type: GameplayCamera,
  },
  objects: [
    {
      color: 0x00ff00,
      position: new Vector3(0, 0, 0),
      rotation: new Euler(),
      size: [1, 2, 1],
      type: RotatingCube,
    } as IRotatingCubeDef,
  ],
};
