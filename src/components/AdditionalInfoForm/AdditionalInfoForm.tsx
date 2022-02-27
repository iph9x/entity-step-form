import { Stack } from '@mui/material';
import { FC } from 'react';

import { InputField, SelectField } from 'src/components';

import { countries } from './AdditionalInfoForm.consts';

const AdditionalInfoForm: FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <SelectField name="country" label="Country" data={countries} />
        <InputField name="address" type="text" label="Address" />
        <InputField name="zipcode" type="text" label="Zipcode" />
        <InputField name="cardNumber" type="text" label="Card number" />
        <InputField name="nameOnCard" type="text" label="Name on card" />
      </Stack>
    </>
  );
};

export default AdditionalInfoForm;
