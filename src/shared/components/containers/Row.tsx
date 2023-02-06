import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface RowProps {
  style?: StyleProp<ViewStyle>;
  spaceBetween?: boolean;
  alignCenter?: boolean;
  flexEnd?: boolean;
}

interface GetJustifyContentProps {
  spaceBetween?: boolean;
  flexEnd?: boolean;
}

type GetJustifyContentReturn =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

function getJustifyContent({
  spaceBetween,
  flexEnd,
}: GetJustifyContentProps): GetJustifyContentReturn {
  if (flexEnd) {
    return 'flex-end';
  }

  if (spaceBetween) {
    return 'space-between';
  }

  return 'flex-start';
}

const Row = ({
  children,
  style,
  spaceBetween,
  alignCenter = true,
  flexEnd,
}: PropsWithChildren<RowProps>) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: getJustifyContent({flexEnd, spaceBetween}),
          alignItems: alignCenter ? 'center' : 'flex-start',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Row;
