import {BankAccount} from '@/shared/types';

export const bankAccountsMock: BankAccount[] = [
  {
    title: 'Nubank C/C',
    monthlyDebt: {
      amount: 142,
      currency: 'BRL',
      type: 'expense',
    },
    bankId: 'nubank',
  },
  {
    title: 'Nubank Guardado',
    bankId: 'nubank',
  },
];

export const bankAccountFindByIdMock = (bankId: string) => {
  const bankAccounts = bankAccountsMock.filter(
    bankAccount => bankAccount.bankId === bankId,
  );

  return bankAccounts;
};
