import React from 'react';
import {View} from 'react-native';

import Row from '@/shared/components/containers/Row';
import {ErrorFallback, LoadingFallback, Text} from '.';

interface GridProps<T> {
  columns?: number;
  isLoading?: boolean;
  hasError?: boolean;
  firstItem?: JSX.Element;
  emptyGridText?: string;
  renderItem: (item: T) => any;
  items: T[];
}

const Grid = <T,>({
  renderItem,
  columns = 2,
  items,
  isLoading = false,
  hasError = false,
  firstItem,
  emptyGridText,
}: GridProps<T>) => {
  const components: any[] = [];
  let childrenComponents: any[] = [];

  items.forEach((item, index) => {
    if (firstItem && index === 0) {
      childrenComponents.push(firstItem);
    }

    childrenComponents.push(renderItem(item));

    if ((firstItem ? index + 1 : index) % columns === columns - 1) {
      components.push(
        <Row style={{alignItems: 'flex-start'}}>{childrenComponents}</Row>,
      );
      childrenComponents = [];
    } else if (index === items.length - 1) {
      components.push(
        <Row style={{alignItems: 'flex-start'}}>{childrenComponents}</Row>,
      );
    }
  });

  return (
    <LoadingFallback isLoading={isLoading}>
      <ErrorFallback hasError={hasError}>
        <View>{components}</View>
        {!!emptyGridText && components.length === 0 && (
          <Text style={{paddingHorizontal: 7, paddingVertical: 3}}>
            {emptyGridText}
          </Text>
        )}
      </ErrorFallback>
    </LoadingFallback>
  );
};

export default Grid;
