export type CurrencyValue = 'BRL' | 'EUR' | 'USD';

export type Currency = {
  sign: string;
  label: string;
  value: CurrencyValue;
};
