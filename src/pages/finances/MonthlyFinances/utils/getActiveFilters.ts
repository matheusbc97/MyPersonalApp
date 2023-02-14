import {FinancesFilterForm} from '../../FinancesFilters';
import getFilterLabel from './getFilterLabel';

function getActiveFilters(filters: FinancesFilterForm | null) {
  return filters
    ? Object.keys(filters)
        .filter(key => filters[key as any] as any)
        .map(key => ({
          label: getFilterLabel(key, filters[key]),
          value: filters[key],
        }))
    : [];
}
export default getActiveFilters;
