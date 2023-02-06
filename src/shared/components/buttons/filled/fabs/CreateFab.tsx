import React from 'react';
import Fab, {FabProps} from '../../Fab';

const CreateFab: React.FC<FabProps> = ({iconName = 'plus', onPress, style}) => {
  return <Fab iconName={iconName} onPress={onPress} style={style} />;
};

export default CreateFab;
