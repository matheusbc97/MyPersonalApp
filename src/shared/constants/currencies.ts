import {Currency} from '@/shared/types';

interface Currencies {
  real: Currency;
  dollar: Currency;
  euro: Currency;
}

export const currencies: Currencies = {
  real: {
    sign: 'R$',
    label: 'Real',
    value: 'BRL',
  },
  dollar: {
    sign: '$',
    label: 'Dolar',
    value: 'USD',
  },
  euro: {
    sign: '€',
    label: 'Euro',
    value: 'EUR',
  },
};

export const lsCurrencies = Object.values(currencies);
