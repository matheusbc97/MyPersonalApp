import mockRequest from '@/shared/utils/mockRequest';
import {financeNotes} from '@/mocks/finances';
import {UpdateFinanceNoteParams} from '@/services/api/FinanceNoteServices/types';

const mockUpdateFinanceNote = async (
  id: string,
  updates: UpdateFinanceNoteParams,
) => {
  try {
    const response = await mockRequest(null);

    const financeNoteIndex = financeNotes.findIndex(
      financeNote => financeNote.id === id,
    );

    if (financeNoteIndex !== -1) {
      financeNotes[financeNoteIndex] = {
        ...financeNotes[financeNoteIndex],
        ...updates,
      };
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockUpdateFinanceNote;
