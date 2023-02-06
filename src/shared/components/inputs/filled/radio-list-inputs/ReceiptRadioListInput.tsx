import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {RadioInput} from '@/shared/components';
import {FinanceType} from '@/shared/types';

interface RadioListProps<T> {
  value: T | null;
  onChangeValue: (value: T) => void;
  style?: StyleProp<ViewStyle>;
}

const ReceiptRadioList = ({
  value,
  onChangeValue,
  style,
}: RadioListProps<FinanceType>) => {
  return (
    <View style={style}>
      <RadioInput
        onPress={() => onChangeValue('receipt')}
        label="Receita"
        selected={value === 'receipt'}
      />
      <RadioInput
        onPress={() => onChangeValue('expense')}
        label="Despesa"
        selected={value === 'expense'}
      />
    </View>
  );
};

export default ReceiptRadioList;
