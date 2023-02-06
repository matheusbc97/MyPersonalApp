export interface CreateGymTrainingParams {
  name: string;
}

export interface UpdateGymTrainingParams {
  name: string;
  id: string;
}

export interface UpdateGymTrainingParams {
  id: string;
  name: string;
}

export interface CreateGymExercisesParams {
  trainingId: string;
  exercisesItems: {
    name: string;
    weight: string;
    series: number;
    repetitions: number;
  }[];
}

export interface UpdateGymExercisesParams {
  id: string;
  exercisesItems: {
    name: string;
    weight: string;
    series: number;
    repetitions: number;
  }[];
}
