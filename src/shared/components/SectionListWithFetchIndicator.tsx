import React, {useState} from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  ScrollView,
  SectionListProps,
  SectionListRenderItem,
  DefaultSectionT,
} from 'react-native';
import ShowFallbackComponent from './fallbacks/ShowFallbackComponent';
import EmptyListText from './EmptyListText';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

export interface SectionListWithFetchIndicatorProps<T>
  extends SectionListProps<T> {
  isLoading: boolean;
  hasError: boolean;
  emptyListText: string;
  refreshControlEnabled?: boolean;
  showActivityIndicator?: boolean;
  onRefresh?: (() => void) | null;
  showListHeaderWhenListIsNotShown?: boolean;
  keyExtractor(item: T, index: number): string;
  renderItem: SectionListRenderItem<T, DefaultSectionT> | undefined;
}

function SectionListWithFetchIndicator<T>({
  isLoading = false,
  hasError = false,
  emptyListText = '',
  sections = [],
  style,
  ListHeaderComponent,
  refreshControlEnabled = true,
  showActivityIndicator = true,
  showListHeaderWhenListIsNotShown = true,
  contentContainerStyle,
  stickySectionHeadersEnabled = true,
  onRefresh,
  renderItem,
  ...rest
}: SectionListWithFetchIndicatorProps<T>) {
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
      <SectionList<T>
        stickySectionHeadersEnabled={stickySectionHeadersEnabled}
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
          sections && sections.length === 0 && styles.contentContainerStyle,
        ]}
        sections={sections}
        renderItem={renderItem}
        {...rest}
      />
    </ShowFallbackComponent>
  );
}

export default SectionListWithFetchIndicator;

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
