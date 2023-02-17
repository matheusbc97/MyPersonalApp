import {createFinanceNoteService} from '@/shared/services/api/financesNotes';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import {CreateFinanceNoteParams} from '@/services/api/FinanceNoteServices/types';

function useCreateFinanceNote() {
  const createFinanceNote = async (params: CreateFinanceNoteParams) => {
    return requestWithScreenLoading(() => createFinanceNoteService(params));
  };

  return createFinanceNote;
}

export default useCreateFinanceNote;
