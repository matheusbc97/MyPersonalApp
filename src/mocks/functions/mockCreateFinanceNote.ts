import mockRequest from '@/shared/utils/mockRequest';
import {financeNotes} from '@/mocks/finances';
import createFakeId from '@/shared/utils/createFakeId';
import {CreateFinanceNoteParams} from '@/services/api/FinanceNoteServices/types';

const mockCreateFinanceNote = async (params: CreateFinanceNoteParams) => {
  try {
    const response = await mockRequest(null);

    financeNotes.push({
      amount: params.amount,
      description: params.description,
      currency: params.currencyValue,
      id: createFakeId(),
      name: params.name,
      type: params.type,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockCreateFinanceNote;
