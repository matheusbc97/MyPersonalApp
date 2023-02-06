import React from 'react';

import ContainedButton, {ContainedButtonProps} from '../../ContainedButton';

const NewExerciseContainedButton = ({
  text = 'Novo Exercício',
  style,
  ...rest
}: ContainedButtonProps) => {
  return (
    <ContainedButton
      style={[{alignItems: 'center'}, style]}
      text={text}
      {...rest}
    />
  );
};

export default NewExerciseContainedButton;
