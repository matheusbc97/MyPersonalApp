import {CreditCard, CreditCardWithCurrentBill} from '@/shared/types';
import getRandomNumber from '@/shared/utils/getRandomNumber';

export const creditCardsMock: CreditCard[] = [
  {
    dueDay: 14,
    expirationDate: '2021-12-28',
    lastFourNumbers: '1234',
    bankId: 'nubank',
    id: 'card1s21as32s',
  },
  {
    dueDay: 5,
    expirationDate: '2021-12-28',
    lastFourNumbers: '5485',
    bankId: 'nubank',
    id: '454554card',
  },
  {
    dueDay: 2,
    expirationDate: '2021-12-28',
    lastFourNumbers: '1234',
    bankId: 'nubank',
    id: 'card145445',
  },
];

export const getCreditCardsWithCurrentBill: () => CreditCardWithCurrentBill[] =
  () =>
    creditCardsMock.map(creditCard => ({
      ...creditCard,
      currentBill: {
        amount: getRandomNumber({max: 900, min: 0, toFixed: 2}),
        currency: 'BRL',
      },
    }));

export const getCreditCardsFromBankIdMock = (bankId: string) => {
  const creditCards = getCreditCardsWithCurrentBill().filter(
    creditCard => creditCard.bankId === bankId,
  );

  return creditCards;
};
