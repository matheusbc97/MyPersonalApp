import {BankDetailsPageParams} from '@/pages/finances/BankDetails';
import {FinancesFiltersPageParams} from '@/pages/finances/FinancesFilters';
import {
  FinanceNote,
  Bank,
  GymTraining,
  Group,
  GymExercise,
  Country,
  Goal,
} from '@/shared/types';
import {MonthlyFinance} from '@/shared/types/Finance';

export type StackParams = {
  Home: undefined;
  FinancesHome: undefined;
  TravelsHome: undefined;
  MonthlyFinances: undefined;
  FinancesFilters: FinancesFiltersPageParams;
  CreateFinanceForm: undefined;
  FinancesNotes: undefined;
  CreateFinanceNoteForm: {
    onFinanceNoteCreated: () => void;
  };
  NewBankForm: undefined;
  UpdateBankForm: undefined;
  UpdateFinanceNoteForm: {
    onFinanceNoteUpdated: () => void;
    financeNote: FinanceNote;
  };
  BankDetails: BankDetailsPageParams;
  Banks: undefined;
  CreateBankForm: {
    onBankCreated: () => void;
  };
  CreateBankAccountForm: undefined;
  CreateCreditCardForm: {
    bank: Bank;
  };
  HealthHome: undefined;
  GymDetails: undefined;
  GymTrainingDetails: {
    gymTraining: GymTraining;
  };
  CreateGymExerciseForm: {
    gymTrainingId: number;
  };
  FinancesGroups: {
    onSelectGroup: (group: Group) => void;
  };
  UpdateFinanceForm: {
    finance: MonthlyFinance;
  };
  CreateGymTraining: undefined;
  UpdateGymTraining: {
    gymTraining: GymTraining;
  };
  UpdateGymExerciseForm: {
    gymExercise: GymExercise;
  };
  CityDetails: undefined;
  Cities: undefined;
  CreateNewCityLink: undefined;
  SelectCountry: {
    onSelectCountry: (country: Country) => void;
  };
  GymExerciseDetails: {
    gymExercise: GymExercise;
  };
  WeightList: undefined;
  GoalsHome: undefined;
  CreateGoalForm: undefined;
  GoalDetails: {
    goal: Goal;
  };
  UpdateGoal: {
    goal: Goal;
  };
  CreateQuest: {
    goal: Goal;
  };
};
