import React from 'react';

import {Text, Separator, Row} from '@/shared/components';
import {StyleProp, ViewStyle} from 'react-native';
import theme from '@/assets/theme';

interface TitleWithSeparatorProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const TitleWithSeparator = ({title, style}: TitleWithSeparatorProps) => {
  return (
    <Row
      style={[{backgroundColor: theme.background, paddingVertical: 5}, style]}>
      <Text type="big">{title}</Text>
      <Separator
        style={{marginLeft: 8, height: 2, backgroundColor: 'white', flex: 1}}
      />
    </Row>
  );
};

export default TitleWithSeparator;
