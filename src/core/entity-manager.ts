import { IComponent } from "./core-component";
import { ISystem } from "./core-system";
import { IEntity } from "./core-entity";

class EntityManager {
  private _entities: IEntity[] = [];
  private _components: IComponent[] = [];
  private _systems: ISystem[] = [];

  public addEntity(entity: IEntity): void {
    // find systems needing the components on this group
  }

  public clear(): void {
    this._components = [];
    this._systems = [];
    this._entities = [];
  }
}

const manager = new EntityManager();
export default manager;
