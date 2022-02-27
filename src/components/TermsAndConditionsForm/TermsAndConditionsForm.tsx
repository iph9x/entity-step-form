import { Stack } from '@mui/material';
import { FC } from 'react';

import { CheckboxField } from 'src/components';

const TermsAndConditionsForm: FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <CheckboxField name="tcAgreement" label="T&C Agreement" />
      </Stack>
    </>
  );
};

export default TermsAndConditionsForm;
