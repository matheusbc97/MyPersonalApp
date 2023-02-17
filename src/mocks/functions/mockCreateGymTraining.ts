import {CreateGymTrainingParams} from '@/shared/services/api/gym/types';
import createFakeId from '@/shared/utils/createFakeId';
import mockRequest from '@/shared/utils/mockRequest';
import {gymTrainingsMock} from '../gymTrainings';

const mockCreateGymTraining = async (params: CreateGymTrainingParams) => {
  try {
    const response = await mockRequest(null);

    gymTrainingsMock.push({
      name: params.name,
      id: createFakeId(),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockCreateGymTraining;
