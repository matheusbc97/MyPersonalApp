import React, {useState} from 'react';
import {View} from 'react-native';

import {
  ScreenWrapper,
  FinanceListItem,
  Row,
  Separator,
  CreateFab,
  FiltersSelect,
  TitleWithTotalSectionHeader,
  SectionListWithFetchIndicator,
} from '@/shared/components';
import {useFetchFinances} from '@/shared/hooks';

import {FinancesFilterForm} from '@/pages/finances/FinancesFilters';
import formatDate from '@/shared/utils/formatDate';
import {Group, ScreenProps} from '@/shared/types';

const getFilterLabel = (filterKey: keyof FinancesFilterForm, value: any) => {
  switch (filterKey) {
    case 'from':
      return `>= ${formatDate(value)}`;
    case 'group':
      const group = value as Group;

      return `${group.title}`;
    case 'paid':
      return 'Pago';
    case 'until':
      return `<= ${formatDate(value)}`;
  }
};

function MonthlyFinances({navigation}: ScreenProps<'Home'>) {
  const [filters, setFilters] = useState<FinancesFilterForm | null>(null);
  const {finances, refetchFinances, hasError, isLoading} = useFetchFinances();

  const lsFilters = filters
    ? Object.keys(filters)
        .filter(key => filters[key])
        .map(key => ({
          label: getFilterLabel(key, filters[key]),
          value: filters[key],
        }))
    : [];

  return (
    <ScreenWrapper>
      <SectionListWithFetchIndicator
        emptyListText="Nenhuma Finança encontrada"
        hasError={hasError}
        isLoading={isLoading}
        sections={finances}
        keyExtractor={item => item.id}
        onRefresh={refetchFinances}
        renderItem={({item: finance}) => (
          <FinanceListItem
            onPress={() =>
              navigation.navigate('UpdateFinanceForm', {
                finance,
                onFinanceUpdated: () => {},
              })
            }
            finance={finance}
          />
        )}
        renderSectionHeader={({section: {title, total}}) => (
          <TitleWithTotalSectionHeader title={title} total={total} />
        )}
        SectionSeparatorComponent={({leadingItem, trailingSection}) => (
          <Separator
            style={{marginTop: 10}}
            showSeparator={!!leadingItem && !!trailingSection}
          />
        )}
      />

      <Row spaceBetween style={{marginTop: 5}}>
        <FiltersSelect
          onPress={() =>
            navigation.navigate('FinancesFilters', {
              onFiltersSelect: setFilters,
              initialFormState: filters,
            })
          }
          filters={lsFilters}
          style={{flex: 2}}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <CreateFab
            iconName="plus"
            onPress={() =>
              navigation.navigate('CreateFinanceForm', {
                onFinanceCreated: getFinances,
              })
            }
          />
        </View>
      </Row>
    </ScreenWrapper>
  );
}

export default MonthlyFinances;
