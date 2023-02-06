import React, {ForwardedRef, forwardRef} from 'react';

import {lsCurrencies} from '@/shared/constants/currencies';
import {Currency} from '@/shared/types';

import SelectInput, {
  SelectInputProps,
  SelectInputHandles,
} from '../../SelectInput';

const CurrencySelectInput = (
  {
    onSelectItem,
    items = lsCurrencies,
    label = 'Moeda',
    inputLabelSelector = currency => currency.sign,
    itemLabelSelector = currency => currency.sign + ' - ' + currency.label,
    keyExtractor = currency => currency.value,
    ...rest
  }: Partial<SelectInputProps<Currency>>,
  ref: ForwardedRef<SelectInputHandles>,
) => {
  return (
    <SelectInput
      ref={ref}
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

export default forwardRef(CurrencySelectInput);
