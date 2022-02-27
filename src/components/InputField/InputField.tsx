import { TextField } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

type InputFieldProps = {
  name: string;
  label: string;
  type: string;
};

const InputField: FC<InputFieldProps> = (props) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      error={meta.touched && Boolean(meta.error) && true}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
      fullWidth
    />
  );
};

export default InputField;
