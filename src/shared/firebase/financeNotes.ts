import {UpdateFinanceNoteParams} from './../../services/api/FinanceNoteServices/types';
import {CreateFinanceNoteParams} from '@/services/api/FinanceNoteServices/types';
import firestore from '@react-native-firebase/firestore';
import {FinanceNote} from '../types';
import {getFinanceNotesSections} from '@/services/api/FinanceNoteServices/utils';

const userId = 'U98XZMw9DLQq8oyQXBtf';

const financeNotesCollection = firestore().collection(
  `users/${userId}/financesNotes`,
);

export async function fetchFinanceNotes() {
  const querySnapshot = await financeNotesCollection.get();
  const financeNotes = querySnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...doc.data(),
      } as FinanceNote),
  );

  const sections = getFinanceNotesSections(financeNotes);
  return sections;
}

export async function createFinanceNote(params: CreateFinanceNoteParams) {
  await financeNotesCollection.add(params);
}

export async function updateFinanceNote(
  id: string,
  params: UpdateFinanceNoteParams,
) {
  await financeNotesCollection.doc(id).update(params);
}
