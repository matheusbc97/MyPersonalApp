import {useGoBackOnlyOneTime} from '@/shared/hooks';
import React from 'react';

import TextButton, {TextButtonProps} from '../../TextButton';

const CancelTextButton = ({
  text = 'Cancelar',
  onPress,
  ...rest
}: TextButtonProps) => {
  const goBack = useGoBackOnlyOneTime();

  return <TextButton text={text} onPress={onPress ?? goBack} {...rest} />;
};

export default CancelTextButton;
