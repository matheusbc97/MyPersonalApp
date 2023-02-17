import {CreateCreditCardParams} from '@/shared/services/api/BanksService/types';
import createFakeId from '@/shared/utils/createFakeId';
import mockRequest from '@/shared/utils/mockRequest';
import {creditCardsMock} from '../creditCards';

const mockCreateCreditCard = async (params: CreateCreditCardParams) => {
  try {
    const response = await mockRequest(null);

    creditCardsMock.push({
      bankId: params.bankId,
      dueDay: params.dueDay,
      expirationDate: params.expiringDate,
      lastFourNumbers: params.lastFourDigits,
      id: createFakeId(),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockCreateCreditCard;
