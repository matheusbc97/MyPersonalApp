import React from 'react';

import {LoadingFallback, ErrorFallback} from '@/shared/components';
import EmptyListText from './EmptyListText';

interface MapListProps<T> {
  isLoading: boolean;
  hasError: boolean;
  data: T[];
  renderItem: (item: T) => JSX.Element;
  emptyListText: string;
}

const MapList = <T,>({
  data,
  hasError,
  isLoading,
  renderItem,
  emptyListText,
}: MapListProps<T>) => {
  return (
    <LoadingFallback isLoading={isLoading}>
      <ErrorFallback hasError={hasError}>
        {data.length === 0 ? (
          <EmptyListText text={emptyListText} />
        ) : (
          data.map(item => renderItem(item))
        )}
      </ErrorFallback>
    </LoadingFallback>
  );
};

export default MapList;
