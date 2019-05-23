import { Object3D, Scene } from "three";
import { generateUUID } from "utils/uuid";
import { IDefinition, IObjectDefinition } from "scene-definition";

export interface ISceneObject<
  T extends Object3D = Object3D,
  D extends IDefinition = IObjectDefinition
> {
  id: string;
  node: T;
  behaviours: any[];
  definition: D;
  create(def: D): T;
  spawn(): void;
  tick(): void;
  dispose(): void;
}

export abstract class SceneObject<
  T extends Object3D = Object3D,
  D extends IDefinition = IDefinition
> implements ISceneObject<T, D> {
  readonly id: string;
  readonly node: T;
  readonly definition: D;

  behaviours: any[];

  constructor(def: D) {
    this.id = generateUUID();
    this.node = this.create(def);
    this.definition = def;
    this.behaviours = [];
  }

  /**
   * Exposes the ability to setup/create the object using the object definition
   * defined in the scene definition. The object returned in this function will
   * become the `node` of this scene object.
   *
   * Occurs before the object is added to the scene.
   *
   * @param def The object definition.
   * @returns The instantiated/created node/object.
   */
  abstract create(def: D): T;

  /**
   * Called immediately after the objects node has been added to the scene or
   * parent, and is when you should position/rotate the object as it is now in
   * the correct 3D context.
   */
  abstract spawn(): void;

  tick(): void {
    // No-op
  }

  /**
   * Optional method for manual cleanup of any three.js objects created/managed
   * by this particular object. Generally a good place to call `.dispose()` on
   * any created geometries and buffers.
   */
  dispose(): void {
    // No-op
  }
}
