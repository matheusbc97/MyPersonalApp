import React from 'react';
import {View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '@/assets/theme';

import Text from './Text';

interface SubHeaderProps {
  title: string;
  iconName: string;
  iconFamily?: 'FontAwesome5' | 'FontAwesome';
}

function SubHeader({title, iconName, iconFamily}: SubHeaderProps) {
  return (
    <View
      style={{
        opacity: 0.7,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      }}>
      {iconFamily === 'FontAwesome' ? (
        <FontAwesomeIcon name={iconName} size={80} color={theme.secondary} />
      ) : (
        <FontAwesome5Icon name={iconName} size={80} color={theme.secondary} />
      )}
      <Text style={{marginTop: 10, fontSize: 25}} type="title">
        {title}
      </Text>
    </View>
  );
}

export default SubHeader;
