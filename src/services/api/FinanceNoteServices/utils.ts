import {FinanceNote, SectionDataWithTotal} from '@/shared/types';

export function getFinanceNotesSections(financeNotes: FinanceNote[]) {
  const receipts = financeNotes.filter(
    financeNote => financeNote.type === 'receipt',
  );

  const expenses = financeNotes.filter(
    financeNote => financeNote.type === 'expense',
  );

  const sections: SectionDataWithTotal<FinanceNote> = [];

  if (expenses.length > 0) {
    sections.push({
      title: 'A Pagar',
      data: expenses,
      total: expenses.reduce((sum, item) => sum + item.amount, 0),
    });
  }

  if (receipts.length > 0) {
    sections.push({
      title: 'A Receber',
      data: receipts,
      total: receipts.reduce((sum, item) => sum + item.amount, 0),
    });
  }

  return sections;
}
