import React from 'react';
import IconButton, {IconButtonProps} from '../../IconButton';

const DeleteIconButton: React.FC<IconButtonProps> = ({
  iconName = 'trash',
  onPress,
  style,
}) => {
  return <IconButton iconName={iconName} onPress={onPress} style={style} />;
};

export default DeleteIconButton;
