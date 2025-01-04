import React from 'react';
import Select from 'react-select';

import { customSelectStyles } from './select-styles';
import ChevronDown from '@/components/icons/ChevronDown';

import styles from './SelectField.module.scss';

type SelectFieldProps = {
  label: string;
  options: Array<Record<'label' | 'value', string>>;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, placeholder, label }) => (
  <div className={styles.selectWrapper}>
    <label className={styles.label}>{label}</label>

    <Select
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <ChevronDown style={{ marginRight: 16 }} />
      }}
      options={options ?? []}
      placeholder={placeholder}
      styles={customSelectStyles}
    />
  </div>
);

export default SelectField;
