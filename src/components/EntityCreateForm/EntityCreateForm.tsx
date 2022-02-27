import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useState } from 'react';
import * as yup from 'yup';

import { Modal, PersonalInfoForm, AdditionalInfoForm, TermsAndConditionsForm } from 'src/components';
import entities from 'src/store/entities';
import { IEntity } from 'src/types/entities';

import styles from './EntityCreateForm.module.scss';
import { EntityCreateFormProps } from './EntityCreateForm.types';

const schema = [
  yup.object().shape({
    name: yup.string().max(20).required('Name is required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    password: yup.string().required('Password is required'),
  }),
  yup.object().shape({
    country: yup.string().max(200).required('Country number is required'),
    address: yup.string().max(200).required('Address number is required'),
    nameOnCard: yup.string().max(200).required('Name on card number is required'),
    cardNumber: yup.string().max(200).required('Card number number is required'),
    zipcode: yup.string().min(6).max(7).required('zipcode number is required'),
  }),
  yup.object().shape({
    tcAgreement: yup.boolean().required('T&C Agreement is required').oneOf([true], 'T&C agreement must be accepted.'),
  }),
];

const renderStepForm = (step: number) => {
  switch (step) {
    case 0:
      return <PersonalInfoForm />;
    case 1:
      return <AdditionalInfoForm />;
    case 2:
      return <TermsAndConditionsForm />;
  }
};

const initialEntityState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  nameOnCard: '',
  country: '',
  address: '',
  zipcode: '',
  cardNumber: '',
  tcAgreement: false,
};

const EntityCreateForm: FC<EntityCreateFormProps> = observer(({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);

  function _handleSubmit(values: Omit<IEntity, 'id'>, actions: any) {
    if (step === 2) {
      entities.createEntity(values);
      onClose();
    } else {
      setStep((p) => p + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <Formik initialValues={initialEntityState} validationSchema={schema[step]} onSubmit={_handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            {renderStepForm(step)}

            {step > 0 && (
              <Button variant="contained" onClick={() => setStep((p) => p - 1)}>
                Prev
              </Button>
            )}
            <Button type="submit" disabled={isSubmitting} variant="contained">
              {step === 2 ? 'Submit' : 'Next'}
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
});

export default EntityCreateForm;
