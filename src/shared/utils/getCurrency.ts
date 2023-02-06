import {CurrencyValue} from '@/shared/types';
import {lsCurrencies} from '../constants/currencies';

function getCurrency(currencyValue: CurrencyValue) {
  return lsCurrencies.find(currency => currency.value === currencyValue);
}

export default getCurrency;
