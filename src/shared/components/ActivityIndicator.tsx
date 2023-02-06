import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

const ActivityIndicator = ({size = 80, color = '#FFF'}: Props) => {
  return <RNActivityIndicator color={color} size={size} />;
};

export default ActivityIndicator;
