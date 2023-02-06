import React from 'react';

import ContainedButton, {ContainedButtonProps} from '../../ContainedButton';

const SaveContainedButton = ({
  text = 'Salvar',
  ...rest
}: ContainedButtonProps) => {
  return <ContainedButton text={text} {...rest} />;
};

export default SaveContainedButton;
