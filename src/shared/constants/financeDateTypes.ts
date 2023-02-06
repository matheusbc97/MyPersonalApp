import {FinanceDateType} from '../types';

interface FinancesDateTypes {
  fixed: FinanceDateType;
  variable: FinanceDateType;
}

export const financesDateTypes: FinancesDateTypes = {
  fixed: {
    label: 'Fixo',
    value: 'fixo',
  },
  variable: {
    label: 'Variável',
    value: 'variavel',
  },
};

export const lsFinancesDateTypes: FinanceDateType[] =
  Object.values(financesDateTypes);
