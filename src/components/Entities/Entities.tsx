import { Button } from '@mui/material';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { FC } from 'react';

import { EntityEditForm, EntityCreateForm } from 'src/components';
import entities from 'src/store/entities';
import { IEntity } from 'src/types/entities';

import styles from './Entities.module.scss';

const Entities: FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateEntityModalOpen, setIsCreateEntityModalOpen] = useState(false);
  const [currentEntity, setCurrentEntity] = useState<IEntity | null>(null);

  return (
    <>
      <ul className={styles.list}>
        {entities.entities?.map((entity) => (
          <li key={entity.id} className={styles.listItem}>
            <div className={cn(styles.listString, styles.entityName)}>{entity.name}</div>
            <div className={styles.listString}>{entity.email}</div>
            <div className={styles.listString}>{entity.phone}</div>
            <div className={styles.buttonsWrapper}>
              <Button
                variant="outlined"
                onClick={() => {
                  setCurrentEntity(entity);
                  setIsOpen(true);
                }}
              >
                Change
              </Button>
              <Button color="error" variant="text" onClick={() => entities.deleteEntity(entity.id)}>
                delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={() => setIsCreateEntityModalOpen(true)}>
        Create
      </Button>
      {isCreateEntityModalOpen && (
        <EntityCreateForm isOpen={isCreateEntityModalOpen} onClose={() => setIsCreateEntityModalOpen(false)} />
      )}
      {currentEntity && <EntityEditForm isOpen={isOpen} onClose={() => setIsOpen(false)} entity={currentEntity} />}
    </>
  );
});

export default Entities;
