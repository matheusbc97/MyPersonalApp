import {CurrencyValue} from './Currency';

export interface CreditCard {
  lastFourNumbers: string;
  expirationDate: string;
  dueDay: number;
  bankId: string;
  id: string;
}

export interface CreditCardBill {
  amount: number;
  currency: CurrencyValue;
}

export interface CreditCardWithCurrentBill extends CreditCard {
  currentBill: CreditCardBill;
}
