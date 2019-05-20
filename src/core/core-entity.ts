import { IComponent } from "./core-component";

export interface IEntity {
  __entityId: string;
  __entityType: string;
  components: IComponent[];
  getComponents(...componentTypes: string[]): IComponent[];
}

export abstract class BaseEntity implements IEntity {
  abstract entityType: string = "";
  entityId: string;

  private _components: Map<string, IComponent> = new Map();

  constructor(...components: IComponent[]) {
    // hello
  }
}
