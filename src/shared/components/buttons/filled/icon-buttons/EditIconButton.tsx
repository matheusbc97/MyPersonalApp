import React from 'react';
import IconButton, {IconButtonProps} from '../../IconButton';

const EditIconButton: React.FC<IconButtonProps> = ({
  iconName = 'pencil',
  onPress,
  style,
}) => {
  return <IconButton iconName={iconName} onPress={onPress} style={style} />;
};

export default EditIconButton;
