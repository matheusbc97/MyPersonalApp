import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Text, Button} from '@/shared/components';
import theme from '@/assets/theme';

interface Props {
  title: string;
  onPress: () => void;
  iconName: string;
  iconFamily?: 'FontAwesome' | 'FontAwesome5';
}

const MenuGridItem: React.FC<Props> = ({
  title,
  onPress,
  iconName,
  iconFamily = 'FontAwesome5',
}) => {
  return (
    <Button
      onPress={onPress}
      style={{
        backgroundColor: theme.surface,
        height: 90,
        borderRadius: 2,
        margin: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
      }}>
      {iconFamily === 'FontAwesome5' ? (
        <FontAwesome5Icon name={iconName} size={30} color={theme.text} />
      ) : (
        <FontAwesomeIcon name={iconName} size={30} color={theme.text} />
      )}
      <Text style={{marginTop: 10, textAlign: 'center'}}>{title}</Text>
    </Button>
  );
};

export default MenuGridItem;
