import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {RadioInput} from '@/shared/components';

interface RadioListProps {
  value: boolean;
  onChangeValue: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

const PaidRadioList = ({value, onChangeValue, style}: RadioListProps) => {
  return (
    <View style={style}>
      <RadioInput
        onPress={() => onChangeValue(true)}
        label="Pago"
        selected={value}
      />
      <RadioInput
        onPress={() => onChangeValue(false)}
        label="Não Pago"
        selected={!value}
      />
    </View>
  );
};

export default PaidRadioList;
