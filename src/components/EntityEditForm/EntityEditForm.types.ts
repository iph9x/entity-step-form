import { IEntity } from 'src/types/entities';

export type EntityEditFormProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  entity: IEntity;
};
