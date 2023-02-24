import {useCallback, useEffect, useMemo, useState} from 'react';

import {
  ScreenWrapper,
  FinanceListItem,
  Row,
  CreateFab,
  FiltersSelect,
  FlatListWithFetchIndicator,
  ArrowsOptions,
} from '@/shared/components';
import {useFetchFinances} from '@/shared/hooks';

import {FinancesFilterForm} from '@/pages/finances/FinancesFilters';
import {Finance, ScreenProps} from '@/shared/types';
import getYearAndMonth from './utils/getYearAndMonth';

import {FetchMonthlyFinancesParams} from '@/shared/services/api/finances/types';
import getActiveFilters from './utils/getActiveFilters';
import formatDate from '@/shared/utils/formatDate';
import {ListRenderItemInfo} from 'react-native';

function addMonthsToDate(date: Date, months: number) {
  return new Date(date.setMonth(date.getMonth() + months));
}

function MonthlyFinances({navigation}: ScreenProps<'Home'>) {
  const [filters, setFilters] = useState<FinancesFilterForm | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const yearAndMonth = useMemo(
    () => getYearAndMonth(currentMonth),
    [currentMonth],
  );

  const [financesParams, setFinancesParams] =
    useState<FetchMonthlyFinancesParams>({
      yearAndMonth,
    });

  useEffect(() => {
    setFinancesParams({yearAndMonth});
  }, [yearAndMonth]);

  const {finances, refetchFinances, hasError, isLoading} =
    useFetchFinances(financesParams);

  const activeFilters = getActiveFilters(filters);

  const renderItem = useCallback(
    ({item: finance}: ListRenderItemInfo<Finance>) => (
      <FinanceListItem
        onPress={() =>
          navigation.navigate('UpdateFinanceForm', {
            finance,
          })
        }
        finance={finance}
      />
    ),
    [navigation],
  );

  return (
    <ScreenWrapper mt={5}>
      <FlatListWithFetchIndicator
        emptyListText="Nenhuma Finança encontrada"
        hasError={hasError}
        isLoading={isLoading}
        data={finances.filter(finance => !finance.payment)}
        keyExtractor={item => item.id.toString()}
        onRefresh={refetchFinances}
        renderItem={renderItem}
      />

      <Row flexEnd>
        <ArrowsOptions
          onLeftArrowPress={() =>
            setCurrentMonth(oldState => addMonthsToDate(oldState, -1))
          }
          value={formatDate(currentMonth, 'yearAndMonth')}
          onRightArrowPress={() =>
            setCurrentMonth(oldState => addMonthsToDate(oldState, 1))
          }
        />
      </Row>

      <Row spaceBetween mt={5}>
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
