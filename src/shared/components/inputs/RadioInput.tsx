import React from 'react';

import Circle from '../Circle';
import Text from '../Text';
import Button from '../buttons/Button';

interface RadioInputProp {
  selected: boolean;
  label: string;
  onPress: () => void;
}

function RadioInput({selected, label, onPress}: RadioInputProp) {
  return (
    <Button
      onPress={onPress}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Circle outlined size={18} center>
        {selected && <Circle size={10} />}
      </Circle>
      <Text style={{marginLeft: 5}}>{label}</Text>
    </Button>
  );
}

export default RadioInput;
