import {getFinanceNotesSections} from '@/services/api/financesNotes/utils';
import {Finance, FinanceNote, SectionDataWithTotal} from '@/shared/types';
//import formatDate from '@/shared/utils/formatDate';

export const finances: Finance[] = [
  {
    id: 'sakl;smak;lsa',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 12,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário1',
    type: 'receipt',
  },
  {
    id: 'sakl;saasaas;lsccca',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 14,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário2',
    type: 'receipt',
  },
  {
    id: 'sakl;cccc;lsacccc',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 15,
    fixedDate: false,
    amount: -154.1,
    currencyValue: 'BRL',
    name: 'Salário3',
    type: 'expense',
  },
  {
    id: 'sakl;smak;lsa',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 20,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário1',
    type: 'receipt',
  },
  {
    id: 'sakl;saasaas;lsccca',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 30,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário2',
    type: 'receipt',
  },
  {
    id: 'sakl;cccc;lsacccc',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 21,
    fixedDate: false,
    amount: -154.1,
    currencyValue: 'BRL',
    name: 'Salário3',
    type: 'expense',
  },
  {
    id: 'sakl;smak;lsa',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 16,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário1',
    type: 'receipt',
  },
  {
    id: 'sakl;saasaas;lsccca',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 10,
    fixedDate: false,
    amount: 154.1,
    currencyValue: 'BRL',
    name: 'Salário2',
    type: 'receipt',
  },
  {
    id: 'sakl;cccc;lsacccc',
    paymentMethod: 'pix anderson',
    paid: false,
    day: 11,
    fixedDate: false,
    amount: -154.1,
    currencyValue: 'BRL',
    name: 'Salário3',
    type: 'expense',
  },
];

export function getFinancesSectionMock(): SectionDataWithTotal<Finance> {
  const sections: any = [0];

  finances.forEach(finance => {
    if (!sections[0]) {
      sections[0] = {
        title: 'setembro',
        total: 0,
        data: [],
      };
    }

    sections[0].data.push(finance);
    sections[0].total += finance.amount;

    /*const dateFormatted = formatDate(finance.date, 'month');

    if (!sections[dateFormatted]) {
      sections[dateFormatted] = {
        title: dateFormatted,
        total: 0,
        data: [],
      };
    }

    sections[dateFormatted].data.push(finance);
    sections[dateFormatted].total += finance.amount;*/
  });

  const sections2: any[] = Object.values(sections);

  return sections2;
}

export const financeNotes: FinanceNote[] = [
  {
    id: 'aaaa',
    type: 'expense',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
  {
    id: 'bbb',
    type: 'expense',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
  {
    id: 'ccc',
    type: 'expense',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
  {
    id: 'fff',
    type: 'receipt',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
  {
    id: 'qqq',
    type: 'receipt',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
  {
    id: 'ttt',
    type: 'receipt',
    description: 'Meio Pagamento: anderson',
    name: 'Microondas',
    amount: 105.42,
    currency: 'BRL',
  },
];

export function getFinancesNoteSectionsMock(): SectionDataWithTotal<FinanceNote> {
  return getFinanceNotesSections(financeNotes);
}
