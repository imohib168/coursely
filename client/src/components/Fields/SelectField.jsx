import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const UISelectField = ({ label, options, ...other }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        {...other}
        label={label}
        options={options}
        id='demo-simple-select'
        sx={{ borderRadius: '10px' }}
        labelId='demo-simple-select-label'
      >
        {options?.map((option) => (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UISelectField;
