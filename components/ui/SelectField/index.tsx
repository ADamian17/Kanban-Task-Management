import React from 'react';
import Select from 'react-select';

import { customSelectStyles } from './select-styles';

type SelectFieldProps = {
  options: Array<Record<'label' | 'value', string>>;
}

const SelectField: React.FC<SelectFieldProps> = ({ options }) => (
  <Select
    components={{
      IndicatorSeparator: () => null,
      DropdownIndicator: () => (
        <svg style={{ marginRight: 16 }} xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
          <path d="M0.79834 1.54858L5.49682 6.24707L10.1953 1.54858" stroke="#635FC7" stroke-width="2" />
        </svg>
      )
    }}
    options={options ?? []}
    placeholder="Select status..."
    styles={customSelectStyles}
  />
);

export default SelectField;
