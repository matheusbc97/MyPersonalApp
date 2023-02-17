import formatDate from '@/shared/utils/formatDate';
import {Finance, FinanceHistoric, MonthlyFinance} from './../types/Finance';
import {UpdateFinanceNoteParams} from '../../services/api/financesNotes/types';
import firestore from '@react-native-firebase/firestore';
import {
  CreateFinanceParams,
  PayFinanceParams,
} from '@/services/api/finances/types';
import {SectionDataItemWithTotal} from '../types';
import addTimeToDate from '../utils/addTimeToDate';
import subTimeToDate from '../utils/subTimeToDate';

const userId = 'U98XZMw9DLQq8oyQXBtf';

const financeCollection = firestore().collection(`users/${userId}/finances`);
const financeHistoricCollection = firestore().collection(
  `users/${userId}/financesHistoric`,
);

interface GetFinanceSectionsParams {
  financesHistoric: FinanceHistoric[];
  finances: Finance[];
  date: Date;
}

const getFinanceSection = ({
  financesHistoric,
  finances,
  date,
}: GetFinanceSectionsParams) => {
  const currentYearAndMonth = formatDate(date, 'yearAndMonth');

  const section: SectionDataItemWithTotal<MonthlyFinance> = {
    title: currentYearAndMonth.toUpperCase(),
    total: 0,
    data: [],
  };

  finances.forEach(finance => {
    const payment = financesHistoric.find(
      financeHistoric =>
        financeHistoric.financeId === finance.id &&
        formatDate(financeHistoric.date, 'yearAndMonth') ===
          currentYearAndMonth,
    );

    section.data.push({
      ...finance,
      paid: !!payment,
      paymentId: payment?.id,
    });
    section.total += finance.amount;
  });

  return section;
};

export async function fetchFinances() {
  const [querySnapshot, financesHistoricSnapshot] = await Promise.all([
    financeCollection.get(),
    financeHistoricCollection.get(),
  ]);

  const finances = querySnapshot.docs.map(
    doc =>
      ({
        ...doc.data(),
        id: doc.id,
      } as Finance),
  );

  const financesHistoric = financesHistoricSnapshot.docs.map(doc => {
    const {date, financeRef, ...rest} = doc.data();
    return {
      id: doc.id,
      date: date.toMillis(),
      financeId: financeRef.id,
      ...rest,
    } as FinanceHistoric;
  });

  const todayDate = new Date();
  const oneMonthBeforeDate = subTimeToDate(new Date(), {months: 1});
  const oneMonthAfterDate = addTimeToDate(new Date(), {months: 1});

  const monthBeforeSections = getFinanceSection({
    finances,
    financesHistoric,
    date: oneMonthBeforeDate,
  });

  const currentMonthSections = getFinanceSection({
    finances,
    financesHistoric,
    date: todayDate,
  });

  const monthAfterSections = getFinanceSection({
    finances,
    financesHistoric,
    date: oneMonthAfterDate,
  });

  return [monthBeforeSections, currentMonthSections, monthAfterSections];
}

export async function createFinance(params: CreateFinanceParams) {
  await financeCollection.add(params);
}

export async function updateFinance(
  id: string,
  params: UpdateFinanceNoteParams,
) {
  await financeCollection.doc(id).update(params);
}

export async function payFinance({financeId, ...rest}: PayFinanceParams) {
  await financeHistoricCollection.add({
    financeRef: financeCollection.doc(financeId),
    ...rest,
  });
}

export async function deletePaymentOfFinance(financeHistoricId: string) {
  await financeHistoricCollection.doc(financeHistoricId).delete();
}
