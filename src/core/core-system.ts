import { IEntity } from "./core-entity";
import { ComponentGroup } from "./core-component";

export interface ISystem {
  addEntity<T>(entity: T): void;
  removeEntity<T>(entity: T): void;
  initialize<T>(components: T[]): void;
  update<T>(components: T[]): void;
}

export class BaseSystem<T extends ComponentGroup> implements ISystem {
  private _entityMap: Map<IEntity, T> = new Map();

  addEntity<E>(entity: E) {
    // hello
  }
}
