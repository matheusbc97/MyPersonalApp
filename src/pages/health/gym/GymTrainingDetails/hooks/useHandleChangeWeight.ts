import {useRef} from 'react';

import {WeightModalHandles} from '@/shared/components';
import {useUpdateGymExerciseItem} from '@/shared/hooks';

interface GymExerciseIdsToBeDeleted {
  exerciseId: number;
  exerciseItemId: number;
}

interface HandleChangeWeightPress {
  gymExerciseId: number;
  gymExerciseItemId: number;
  weightInitialValue?: string;
}

function useHandleChangeWeight() {
  const gymExerciseIdsToBeDeletedRef = useRef<GymExerciseIdsToBeDeleted | null>(
    null,
  );

  const weightModalRef = useRef<WeightModalHandles>(null);

  const updateGymExerciseItem = useUpdateGymExerciseItem({
    onSuccess: () => {
      weightModalRef.current?.close();
    },
  });

  const handleSaveWeight = (weight: number) => {
    if (gymExerciseIdsToBeDeletedRef.current) {
      updateGymExerciseItem({
        id: gymExerciseIdsToBeDeletedRef.current.exerciseItemId,
        weight: weight.toString(),
        exerciseId: gymExerciseIdsToBeDeletedRef.current.exerciseId,
      });
    }
  };

  const handleChangeWeightPress = ({
    gymExerciseId,
    gymExerciseItemId,
    weightInitialValue,
  }: HandleChangeWeightPress) => {
    gymExerciseIdsToBeDeletedRef.current = {
      exerciseId: gymExerciseId,
      exerciseItemId: gymExerciseItemId,
    };
    weightModalRef.current?.open(weightInitialValue);
  };

  return {
    weightModalRef,
    handleSaveWeight,
    handleChangeWeightPress,
  };
}

export default useHandleChangeWeight;
