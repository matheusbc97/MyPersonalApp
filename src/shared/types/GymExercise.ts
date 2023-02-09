export interface GymExercise {
  id: number;
  exercisesItems: GymExercisesItem[];
}

export interface GymExercisesItem {
  id: number;
  name: number;
  weight: string;
  series: number;
  repetitions: number;
}
