import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

import theme from '@/assets/theme';
import {shadow} from '@/shared/styles';
import Button from '../buttons/Button';
import useEnhancedViewStyle, {
  EnhancedViewStyleProps,
} from '@/shared/hooks/useEnhancedViewStyle';

export interface CardProps extends EnhancedViewStyleProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  row?: boolean;
}

const Card = ({
  children,
  style,
  onPress,
  row,
  ...rest
}: PropsWithChildren<CardProps>) => {
  const enhancedViewStyle = useEnhancedViewStyle({
    ...rest,
  });

  return (
    <Button
      onPress={onPress}
      style={[
        {flexDirection: row ? 'row' : 'column'},
        styles.container,
        enhancedViewStyle,
        style,
      ]}>
      {children}
    </Button>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.surface,
    ...shadow,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
  },
});
