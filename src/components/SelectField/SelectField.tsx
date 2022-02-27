import { InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

type SelectFieldProps = {
  name: string;
  label: string;
  data: Array<{ value: string; label: string }>;
};

const SelectField: FC<SelectFieldProps> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  return (
    <FormControl {...rest} error={meta.touched && Boolean(meta.error)}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ?? ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
