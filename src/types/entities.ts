export interface IEntityForm {
  name: string;
  email: string;
  phone: string;
}

export interface IEntity extends IEntityForm {
  id: number;
  password: string;
}
