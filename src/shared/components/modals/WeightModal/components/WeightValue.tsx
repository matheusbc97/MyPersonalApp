import {forwardRef} from 'react';

import IconButton from '../../../buttons/IconButton';
import Column from '../../../containers/Column';
import Text from '../../../Text';

interface WeightValueProps {
  value: number;
  onChangeValue: (value: number) => void;
}

function WeightValue({value, onChangeValue}: WeightValueProps) {
  return (
    <Column mh={5}>
      <IconButton
        size={22}
        iconName="chevron-up"
        onPress={() => onChangeValue(value + 1)}
      />

      <Text type="title-extra-big">{value}</Text>

      <IconButton
        disabled={value === 0}
        size={22}
        iconName="chevron-down"
        onPress={() => onChangeValue(value - 1)}
      />
    </Column>
  );
}

export default forwardRef(WeightValue);
