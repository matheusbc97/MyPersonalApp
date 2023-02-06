import React from 'react';

import SelectInput, {SelectInputProps} from '../../SelectInput';
import {FinanceDateType} from '@/shared/types';

import {lsFinancesDateTypes} from '@/shared/constants/financeDateTypes';

const FinanceDateTypeSelectInput = ({
  onSelectItem,
  items = lsFinancesDateTypes,
  label = 'Tipo',
  inputLabelSelector = finance => finance.label,
  itemLabelSelector = finance => finance.label,
  keyExtractor = finance => finance.value,
  ...rest
}: Partial<SelectInputProps<FinanceDateType>>) => {
  return (
    <SelectInput
      items={items}
      label={label}
      itemLabelSelector={itemLabelSelector}
      inputLabelSelector={inputLabelSelector}
      onSelectItem={onSelectItem}
      keyExtractor={keyExtractor}
      {...rest}
    />
  );
};

export default FinanceDateTypeSelectInput;
