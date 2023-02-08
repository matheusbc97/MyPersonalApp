import React from 'react';

import TextButton, {TextButtonProps} from '../../TextButton';

const CancelTextButton = ({
  text = 'Cancelar',
  onPress,
  ...rest
}: TextButtonProps) => {
  return <TextButton text={text} onPress={onPress} {...rest} />;
};

export default CancelTextButton;
