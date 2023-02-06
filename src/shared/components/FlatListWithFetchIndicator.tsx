import React, {useState} from 'react';
import {
  RefreshControl,
  FlatList,
  StyleSheet,
  ScrollView,
  FlatListProps,
  ListRenderItem,
} from 'react-native';
import ShowFallbackComponent from './fallbacks/ShowFallbackComponent';
import EmptyListText from './EmptyListText';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

export interface FlatListWithFetchIndicatorProps<T>
  extends FlatListProps<T> {
  isLoading: boolean;
  hasError: boolean;
  emptyListText: string;
  refreshControlEnabled?: boolean;
  showActivityIndicator?: boolean;
  onRefresh?: (() => void) | null;
  showListHeaderWhenListIsNotShown?: boolean;
  keyExtractor(item: T, index: number): string;
  renderItem: ListRenderItem<T> | undefined;
}

function FlatListWithFetchIndicator<T>({
  isLoading = false,
  hasError = false,
  emptyListText = '',
  data = [],
  style,
  ListHeaderComponent,
  refreshControlEnabled = true,
  showActivityIndicator = true,
  showListHeaderWhenListIsNotShown = true,
  contentContainerStyle,
  onRefresh,
  renderItem,
  ...rest
}: FlatListWithFetchIndicatorProps<T>) {
  const [firstLoading, setFirstLoading] = useState(true);

  return (
    <ShowFallbackComponent
      fallback={
        <ScrollView contentContainerStyle={styles.scrollView}>
          {showListHeaderWhenListIsNotShown && ListHeaderComponent}
          <ErrorMessage onTryAgainPress={onRefresh} />
        </ScrollView>
      }
      showFallback={hasError && !isLoading}>
      <FlatList<T>
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator />
          ) : (
            <EmptyListText text={emptyListText} />
          )
        }
        ListHeaderComponent={ListHeaderComponent}
        refreshControl={
          refreshControlEnabled && onRefresh ? (
            <RefreshControl
              colors={['#d50006', '#ab2b3f', '#a1001a']}
              onRefresh={() => {
                if (firstLoading && showActivityIndicator) {
                  setFirstLoading(false);
                }

                onRefresh?.();
              }}
              refreshing={isLoading && !firstLoading}
            />
          ) : undefined
        }
        style={[styles.list, style]}
        contentContainerStyle={[
          contentContainerStyle,
          data && data.length === 0 && styles.contentContainerStyle,
        ]}
        data={data}
        renderItem={renderItem}
        {...rest}
      />
    </ShowFallbackComponent>
  );
}

export default FlatListWithFetchIndicator;

const styles = StyleSheet.create({
  list: {flex: 1},
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
