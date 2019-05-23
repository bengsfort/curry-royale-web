import { Vector3, Camera, Euler, Object3D } from "three";
import { SceneObject } from "scene-object";

export interface IDefinition {
  type: new (...args: any[]) => SceneObject;
  position: Vector3;
  children?: IDefinition[];
}

export interface ICameraDefinition extends IDefinition {
  type: new (...args: any[]) => SceneObject<Camera, ICameraDefinition>;
  position: Vector3;
  lookAt: Vector3;
}

export interface IObjectDefinition extends IDefinition {
  type: new (...args: any[]) => SceneObject<Object3D, IObjectDefinition>;
  position: Vector3;
  rotation: Euler;
  children?: IObjectDefinition[];
}

export interface ISceneDefinition {
  camera: ICameraDefinition;
  objects: IObjectDefinition[];
}
