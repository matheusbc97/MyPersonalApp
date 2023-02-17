import {UpdateGymTrainingParams} from '@/shared/services/api/gym/types';
import mockRequest from '@/shared/utils/mockRequest';
import {gymTrainingsMock} from '../gymTrainings';

const mockUpdateGymTraining = async (params: UpdateGymTrainingParams) => {
  try {
    const response = await mockRequest(null);

    const gymTrainingIndex = gymTrainingsMock.findIndex(
      gymTraining => gymTraining.id === params.id,
    );

    gymTrainingsMock[gymTrainingIndex] = {
      ...gymTrainingsMock[gymTrainingIndex],
      ...params,
    };

    return response;
  } catch (error) {
    throw error;
  }
};

export default mockUpdateGymTraining;
