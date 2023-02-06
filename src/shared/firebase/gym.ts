import {GymExercise} from './../types/GymExercise';
import firestore from '@react-native-firebase/firestore';

import {
  CreateGymExercisesParams,
  CreateGymTrainingParams,
  UpdateGymExercisesParams,
  UpdateGymTrainingParams,
} from '@/services/api/GymService/types';
import {Bank} from '../types';

const userId = 'U98XZMw9DLQq8oyQXBtf';

const gymTrainingCollection = firestore().collection(
  `users/${userId}/gymTrainings`,
);

export async function fetchGymTrainings() {
  const querySnapshot = await gymTrainingCollection.get();
  const gymTrainings = querySnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Bank),
  );

  return gymTrainings;
}

export async function createGymTraining(params: CreateGymTrainingParams) {
  await gymTrainingCollection.add(params);
}

export async function updateGymTraining({
  id,
  ...params
}: UpdateGymTrainingParams) {
  await gymTrainingCollection.doc(id).update(params);
}

export async function fetchGymExercises(
  gymTrainingId: string,
): Promise<{data: GymExercise; id: string}[]> {
  const querySnapshot = await gymTrainingCollection
    .doc(gymTrainingId)
    .collection('exercises')
    .get();

  const exercises = querySnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...doc.data(),
      } as any),
  );

  return exercises;
}

export async function createGymExercises({
  gymTrainingId,
  gymExercises,
}: CreateGymExercisesParams) {
  await gymTrainingCollection.doc(gymTrainingId).collection('exercises').add({
    data: gymExercises,
  });
}

export async function updateGymExercises({
  gymTrainingId,
  gymExercises,
  gymExerciseId,
}: UpdateGymExercisesParams) {
  await gymTrainingCollection
    .doc(gymTrainingId)
    .collection('exercises')
    .doc(gymExerciseId)
    .update({
      data: gymExercises,
    });
}
