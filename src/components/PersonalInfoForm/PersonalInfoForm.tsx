import { Stack } from '@mui/material';
import { FC } from 'react';

import { InputField } from 'src/components';

const PersonalInfoForm: FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <InputField name="name" type="text" label="name" />
        <InputField name="email" type="email" label="email" />
        <InputField name="phone" type="tel" label="phone" />
        <InputField name="password" type="password" label="password" />
      </Stack>
    </>
  );
};

export default PersonalInfoForm;
