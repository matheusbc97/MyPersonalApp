import React from 'react';
import Fab, {FabProps} from '../../Fab';

const EditFab: React.FC<FabProps> = ({iconName = 'pencil', onPress, style}) => {
  return <Fab iconName={iconName} onPress={onPress} style={style} />;
};

export default EditFab;
