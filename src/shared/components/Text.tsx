import React, {useCallback} from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

import theme from '@/assets/theme';
import useEnhancedViewStyle, {
  EnhancedViewStyleProps,
} from '../hooks/useEnhancedViewStyle';

interface TextProps extends RNTextProps, EnhancedViewStyleProps {
  type?:
    | 'default'
    | 'title'
    | 'secondary'
    | 'big'
    | 'label'
    | 'title-extra-big';
  textAlign?: 'auto' | 'right' | 'left' | 'justify' | 'center';
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  type = 'default',
  textAlign,
  ...rest
}) => {
  const enhancedViewStyle = useEnhancedViewStyle(rest);

  const getStyle: any = useCallback(() => {
    let textStyle: TextStyle = {};

    switch (type) {
      case 'title':
        textStyle = {
          color: theme.text,
          fontWeight: 'bold',
          fontSize: 16,
        };
        break;
      case 'title-extra-big':
        textStyle = {
          color: theme.text,
          fontWeight: 'bold',
          fontSize: 22,
        };
        break;
      case 'secondary':
        textStyle = {
          color: theme.onSecondary,
        };
        break;
      case 'big':
        textStyle = {
          color: theme.text,
          fontSize: 16,
        };
        break;
      case 'label':
        textStyle = {
          color: theme.text,
          fontSize: 13,
        };
        break;
      default:
        textStyle = {
          color: theme.text,
          fontSize: 14,
          fontWeight: '500',
        };
        break;
    }

    return textStyle;
  }, [type]);

  return (
    <RNText
      style={[
        enhancedViewStyle,
        getStyle(),
        textAlign ? {textAlign} : {},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
