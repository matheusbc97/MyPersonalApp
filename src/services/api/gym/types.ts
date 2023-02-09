export interface CreateGymTrainingParams {
  name: string;
}

export interface UpdateGymTrainingParams {
  name: string;
  id: number;
}

export interface UpdateGymTrainingParams {
  id: number;
  name: string;
}

export interface CreateGymExercisesParams {
  trainingId: number;
  exercisesItems: {
    name: string;
    weight: string;
    series: number;
    repetitions: number;
  }[];
}

export interface UpdateGymExercisesParams {
  id: number;
  exercisesItems: {
    name: string;
    weight: string;
    series: number;
    repetitions: number;
  }[];
}

export interface UpdateGymExerciseItemParams {
  id: number;
  name?: string;
  weight?: string;
  series?: number;
  repetitions?: number;
}
