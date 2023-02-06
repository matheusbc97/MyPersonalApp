export interface GymExercise {
  id: string;
  exercisesItems: GymExercisesItem[];
}

export interface GymExercisesItem {
  name: string;
  weight: string;
  series: number;
  repetitions: number;
}
