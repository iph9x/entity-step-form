import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { useField } from 'formik';
import { FC, ChangeEvent } from 'react';

type CheckboxFieldProps = {
  name: string;
  label: string;
};

const CheckboxField: FC<CheckboxFieldProps> = (props) => {
  const { label, ...rest } = props;
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.checked);

  return (
    <FormControlLabel
      label={<span style={{ color: 'black' }}>{label}</span>}
      control={<Checkbox checked={field.checked} onChange={onCheckboxChange} {...rest} />}
    />
  );
};

export default CheckboxField;
