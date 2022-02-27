import { makeAutoObservable } from 'mobx';

import { IEntity, IEntityForm } from 'src/types/entities';

interface IEntities {
  entities: IEntity[];
  changeEntity: (newEntity: IEntity) => void;
}

class Entities implements IEntities {
  entities: IEntity[] = [];

  constructor() {
    makeAutoObservable(this);

    const store = localStorage.getItem('entities');

    if (store) {
      this.entities.push(...JSON.parse(store));
    }
  }

  createEntity(entity: Omit<IEntity, 'id'>) {
    const newID =
      Math.max.apply(
        null,
        this.entities.map(({ id }) => id)
      ) + 1;

    this.entities.push({
      id: newID,
      name: entity.name,
      email: entity.email,
      phone: entity.phone,
      password: entity.password,
    });

    localStorage.setItem('entities', JSON.stringify(this.entities));
  }

  changeEntity(newEntity: IEntityForm & { id: number }) {
    const updated = this.entities.find((entity) => entity.id === newEntity.id);

    if (updated) {
      updated.name = newEntity.name;
      updated.email = newEntity.email;
      updated.phone = newEntity.phone;
    }
  }

  deleteEntity(id: number) {
    this.entities = this.entities.filter((entity) => entity.id !== id);
    localStorage.setItem('entities', JSON.stringify(this.entities));
  }
}

export default new Entities();
