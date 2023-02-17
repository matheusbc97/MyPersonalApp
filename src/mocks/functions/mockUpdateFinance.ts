import mockRequest from '@/shared/utils/mockRequest';
import {finances} from '@/mocks/finances';
import {UpdateFinanceParams} from '@/shared/services/api/finances/types';

const mockUpdateFinanceNote = async (
  id: string,
  updates: UpdateFinanceParams,
) => {
  try {
    const response = await mockRequest(null);

    const financeIndex = finances.findIndex(
      financeNote => financeNote.id === id,
    );

    if (financeIndex !== -1) {
      finances[financeIndex] = {
        ...finances[financeIndex],
        ...updates,
      };
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockUpdateFinanceNote;
