import mockRequest from '@/shared/utils/mockRequest';
import {finances} from '@/mocks/finances';
import createFakeId from '@/shared/utils/createFakeId';
import {CreateFinanceParams} from '@/services/api/FinanceServices/types';

const mockCreateFinanceNote = async (params: CreateFinanceParams) => {
  try {
    const response = await mockRequest(null);

    finances.push({
      id: createFakeId(),
      amount: params.amount,
      currencyValue: params.currencyValue,
      day: params.day,
      fixedDate: params.fixedDate,
      paid: params.paid,
      paymentMethod: params.paymentMethod,
      name: params.name,
      type: params.type,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockCreateFinanceNote;
