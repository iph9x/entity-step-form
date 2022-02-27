import { Button, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import * as yup from 'yup';

import { Modal } from 'src/components';
import entities from 'src/store/entities';
import { IEntityForm } from 'src/types/entities';

import styles from './EntityEditForm.module.scss';
import { EntityEditFormProps } from './EntityEditForm.types';

const schema = yup.object().shape({
  name: yup.string().max(20).required('Name is required'),
  phone: yup.number().required('Phone number is required'),
  email: yup.string().email('email err').required('Email is required'),
});

const EntityEditForm: FC<EntityEditFormProps> = observer(({ isOpen, entity, onClose }) => {
  const formik = useFormik<IEntityForm>({
    initialValues: {
      name: entity.name,
      phone: entity.phone,
      email: entity.email,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      entities.changeEntity({ id: entity.id, ...values });
      onClose();
    },
  });

  useEffect(() => {
    formik.setValues({
      name: entity.name,
      phone: entity.phone,
      email: entity.email,
    });
  }, [entity]);

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Stack spacing={2}>
          <TextField
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.name}
            helperText={formik.errors.name}
          />
          <TextField
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.errors.email}
          />
          <TextField
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && !!formik.errors.phone}
            helperText={formik.errors.phone}
          />
          <Button type="submit" variant="contained" disabled={Object.values(formik.errors).length > 0}>
            Submit
          </Button>
        </Stack>
      </form>
    </Modal>
  );
});

export default EntityEditForm;
