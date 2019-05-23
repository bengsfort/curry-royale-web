import { Camera, Scene, Object3D, WebGLRenderer } from "three";
import { ISceneObject, SceneObject } from "scene-object";
import {
  ISceneDefinition,
  ICameraDefinition,
  IDefinition,
} from "scene-definition";

// @todo: This could be added as a reference to each scene object, along with
// an `add` and `remove` method to dynamically add things at runtime.
export class SceneRuntime {
  _definition: ISceneDefinition;
  _objects: ISceneObject[];

  _scene!: Scene;
  _camera!: ISceneObject<Camera, ICameraDefinition>;

  constructor(def: ISceneDefinition) {
    this._definition = def;
    this._objects = [];
  }

  /**
   * Iterates through all scene object definitions in a given array, and then
   * creates object, adds it to the hierarchy, and then spawns it. Recursive.
   *
   * @param defs An array of object definitions.
   * @param parent The parent node to add all the objects under.
   * @returns An flat array of all scene objects.
   */
  private createSceneObjects(
    defs: IDefinition[],
    parent: Object3D
  ): SceneObject[] {
    // Create a new flat array of SceneObjects created via the definitions.
    return defs.reduce<SceneObject[]>((result, def) => {
      // Create the object, add to hierarchy, then spawn it.
      const obj = new def.type(def);
      parent.add(obj.node);
      obj.spawn();
      const children = this.createSceneObjects(def.children || [], obj.node);
      // Return the rest of the result, this object, and all child objects.
      return [...result, obj, ...children];
    }, []);
  }

  /**
   * Constructs the scene based on the given definition, iterating through the
   * definition and creating the nodes required to run the scene.
   */
  public create() {
    const { camera, objects } = this._definition;
    const scene = new Scene();

    // Create the camera
    const cameraObj = new camera.type(camera);
    scene.add(cameraObj.node);
    cameraObj.spawn();
    this._camera = cameraObj;

    // Iterate through the objects
    this._objects = this.createSceneObjects(objects, scene) as ISceneObject[];
    this._scene = scene;
  }

  /**
   * Iterates through all items in the scene and attempts to dispose of them.
   * Iterates backwards to ensure all child objects are accounted for before
   * the parent gets cleaned.
   */
  public dispose() {
    // Iterate through all scene objects
    let object = this._objects.pop();
    while (object) {
      object.dispose();
      object = this._objects.pop();
    }
  }

  /**
   * Main tick for all objects.
   * @todo this should tick behaviours
   */
  public tick(renderer: WebGLRenderer) {
    // Create copy to protect against objects deleting themselves
    // @todo: See if this is terrible with performance...
    const objs = this._objects.slice();
    for (const obj of objs) {
      obj.tick();
    }
    renderer.render(this._scene, this._camera.node);
  }
}
