import {FinancesFilterForm} from '@/pages/finances/FinancesFilters';
import formatDate from '@/shared/utils/formatDate';
import {Group} from '@/shared/types';

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

export default getFilterLabel;
