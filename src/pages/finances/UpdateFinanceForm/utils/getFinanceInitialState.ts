import {IFinanceForm} from '@/shared/components';
import {Finance} from '@/shared/types';

function getFinanceInitialState(finance: Finance): IFinanceForm {
  const financeInitialState: IFinanceForm = {
    amount: String(finance.amount),
    //currency: getCurrency(finance.currencyValue),
    day: String(finance.day),
    fixedDate: finance.fixedDate,
    group: finance.group,
    name: finance.name,
    paymentMethod: finance.paymentMethod,
    type: finance.amount > 0 ? 'receipt' : 'expense',
  };

  return financeInitialState;
}

export default getFinanceInitialState;
