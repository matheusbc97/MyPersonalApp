import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import theme from '@/assets/theme';

interface SeparatorProps {
  style?: StyleProp<ViewStyle>;
  showSeparator?: boolean;
  defaultMargin?: boolean;
}

const Separator = ({
  style,
  showSeparator = true,
  defaultMargin = false,
}: SeparatorProps) => {
  if (showSeparator) {
    return (
      <View
        style={[
          {
            height: 1,
            backgroundColor: theme.primaryVariant,
            marginHorizontal: defaultMargin ? 10 : 0,
          },
          style,
        ]}
      />
    );
  }

  return null;
};

export default Separator;
