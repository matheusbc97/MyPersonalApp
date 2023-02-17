import {useState} from 'react';

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
import {ScreenProps} from '@/shared/types';
import getYearAndMonth from './utils/getYearAndMonth';

import {FetchMonthlyFinancesParams} from '@/services/api/finances/types';
import getActiveFilters from './utils/getActiveFilters';

function MonthlyFinances({navigation}: ScreenProps<'Home'>) {
  const [filters, setFilters] = useState<FinancesFilterForm | null>(null);

  const [financesParams, setFinancesParams] =
    useState<FetchMonthlyFinancesParams>({
      yearAndMonthStart: getYearAndMonth(-1),
      yearAndMonthEnd: getYearAndMonth(1),
    });

  const {finances, refetchFinances, hasError, isLoading} =
    useFetchFinances(financesParams);

  const activeFilters = getActiveFilters(filters);

  return (
    <ScreenWrapper>
      <SectionListWithFetchIndicator
        emptyListText="Nenhuma Finança encontrada"
        hasError={hasError}
        isLoading={isLoading}
        sections={finances}
        keyExtractor={item => item.id.toString()}
        onRefresh={refetchFinances}
        renderItem={({item: finance}) => (
          <FinanceListItem
            onPress={() =>
              navigation.navigate('UpdateFinanceForm', {
                finance,
              })
            }
            finance={finance}
          />
        )}
        renderSectionHeader={({section: {year, month, total}}) => (
          <TitleWithTotalSectionHeader
            title={month + '/' + year}
            total={total}
          />
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
          filters={activeFilters}
          style={{flex: 1}}
        />
        <CreateFab
          iconName="plus"
          onPress={() => navigation.navigate('CreateFinanceForm')}
        />
      </Row>
    </ScreenWrapper>
  );
}

export default MonthlyFinances;
