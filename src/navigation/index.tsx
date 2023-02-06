import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Country} from '@/shared/types/Country';

import Home from '@/pages/Home';
import FinancesHome from '@/pages/finances/FinancesHome';
import theme from '@/assets/theme';
import MonthlyFinances from '@/pages/finances/MonthlyFinances';
import FinancesFilters, {
  FinancesFiltersPageParams,
} from '@/pages/finances/FinancesFilters';
import FinancesGroups from '@/pages/finances/FinancesGroups';
import CreateFinanceForm from '@/pages/finances/CreateFinanceForm';
import FinancesNotes from '@/pages/finances/FinancesNotes';
import CreateFinancesNoteForm from '@/pages/finances/CreateFinanceNoteForm';
import NewBankForm from '@/pages/finances/NewBankForm';
import UpdateBankForm from '@/pages/finances/UpdateBankForm';
import UpdateFinanceForm from '@/pages/finances/UpdateFinanceForm';
import Banks from '@/pages/finances/Banks';
import BankDetails, {BankDetailsPageParams} from '@/pages/finances/BankDetails';
import CreateBankForm from '@/pages/finances/CreateBankForm';
import CreateBankAccountForm from '@/pages/finances/CreateBankAccountForm';
import CreateCreditCardForm from '@/pages/finances/CreateCreditCardForm';
import HealthHome from '@/pages/health/HealthHome';
import GymDetails from '@/pages/health/GymDetails';
import GymTrainingDetails from '@/pages/health/GymTrainingDetails';
import CreateGymExerciseForm from '@/pages/health/CreateGymExerciseForm';
import UpdateFinanceNoteForm from '@/pages/finances/UpdateFinanceNoteForm';
import CreateGymTraining from '@/pages/health/CreateGymTraining';
import SelectCountry from '@/pages/travels/SelectCountry';

import {
  Bank,
  FinanceNote,
  Group,
  GymExercise,
  GymTraining,
} from '@/shared/types';
import UpdateGymTraining from '@/pages/health/UpdateGymTraining';
import UpdateGymExerciseForm from '@/pages/health/UpdateGymExerciseForm';
import {MonthlyFinance} from '@/shared/types/Finance';
import TravelsHome from '@/pages/travels/TravelsHome';
import CityDetails from '@/pages/travels/CityDetails';
import CreateNewCityLink from '@/pages/travels/CreateNewCityLink';
import Cities from '@/pages/travels/Cities';

export type StackParams = {
  Home: undefined;
  FinancesHome: undefined;
  TravelsHome: undefined;
  MonthlyFinances: undefined;
  FinancesFilters: FinancesFiltersPageParams;
  CreateFinanceForm: {
    onFinanceCreated: () => void;
  };
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
    onGymTrainingUpdated: () => void;
  };
  CreateGymExerciseForm: {
    gymTrainingId: string;
  };
  FinancesGroups: {
    onSelectGroup: (group: Group) => void;
  };
  UpdateFinanceForm: {
    onFinanceUpdated: () => void;
    finance: MonthlyFinance;
  };
  CreateGymTraining: {
    onGymTrainingCreated: () => void;
  };
  UpdateGymTraining: {
    onGymTrainingUpdated: (gymTraining: GymTraining) => void;
    gymTraining: GymTraining;
  };
  UpdateGymExerciseForm: {
    gymTrainingId: string;
    gymExercise: GymExercise;
    onGymExerciseUpdated: () => void;
  };
  CityDetails: undefined;
  Cities: undefined;
  CreateNewCityLink: undefined;
  SelectCountry: {
    onSelectCountry: (country: Country) => void;
  };
};

const Stack = createNativeStackNavigator<StackParams>();

function MyStack() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: theme.text,
          background: theme.background,
          card: theme.primary,
          text: theme.text,
          border: theme.accent,
          notification: 'rgb(255, 69, 58)',
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'Início',
        }}>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: 'Início',
          }}
          component={Home}
        />
        <Stack.Screen
          name="FinancesHome"
          options={{
            headerTitle: 'Finanças',
          }}
          component={FinancesHome}
        />
        <Stack.Screen
          name="MonthlyFinances"
          options={{
            headerTitle: 'Finanças Mensais',
          }}
          component={MonthlyFinances}
        />
        <Stack.Screen
          name="FinancesFilters"
          options={{
            headerTitle: 'Filtros',
          }}
          component={FinancesFilters}
        />
        <Stack.Screen
          name="FinancesGroups"
          options={{
            headerTitle: 'Selecionar Grupo',
          }}
          component={FinancesGroups}
        />
        <Stack.Screen
          name="CreateFinanceForm"
          options={{
            headerTitle: 'Nova Finança',
          }}
          component={CreateFinanceForm}
        />
        <Stack.Screen
          name="FinancesNotes"
          options={{
            headerTitle: 'Notas',
          }}
          component={FinancesNotes}
        />
        <Stack.Screen
          name="CreateFinanceNoteForm"
          options={{
            headerTitle: 'Notas',
          }}
          component={CreateFinancesNoteForm}
        />
        <Stack.Screen
          name="NewBankForm"
          options={{
            headerTitle: 'Novo Banco',
          }}
          component={NewBankForm}
        />
        <Stack.Screen
          name="UpdateBankForm"
          options={{
            headerTitle: 'Atualizar Banco',
          }}
          component={UpdateBankForm}
        />
        <Stack.Screen
          name="UpdateFinanceNoteForm"
          options={{
            headerTitle: 'Atualizar Finança',
          }}
          component={UpdateFinanceNoteForm}
        />
        <Stack.Screen
          name="Banks"
          options={{
            headerTitle: 'Bancos',
          }}
          component={Banks}
        />
        <Stack.Screen
          name="BankDetails"
          options={{
            headerTitle: 'Banco',
          }}
          component={BankDetails}
        />
        <Stack.Screen
          name="CreateBankForm"
          options={{
            headerTitle: 'Criar Banco',
          }}
          component={CreateBankForm}
        />
        <Stack.Screen
          name="CreateBankAccountForm"
          options={{
            headerTitle: 'Criar Conta de Banco',
          }}
          component={CreateBankAccountForm}
        />
        <Stack.Screen
          name="CreateCreditCardForm"
          options={{
            headerTitle: 'Criar Cartão de Crédito',
          }}
          component={CreateCreditCardForm}
        />
        <Stack.Screen
          name="HealthHome"
          options={{
            headerTitle: 'Saúde',
          }}
          component={HealthHome}
        />
        <Stack.Screen
          name="GymDetails"
          options={{
            headerTitle: 'Academia',
          }}
          component={GymDetails}
        />
        <Stack.Screen
          name="GymTrainingDetails"
          options={{
            headerTitle: 'Academia',
          }}
          component={GymTrainingDetails}
        />
        <Stack.Screen
          name="CreateGymExerciseForm"
          options={{
            headerTitle: 'Exerício',
          }}
          component={CreateGymExerciseForm}
        />
        <Stack.Screen
          name="UpdateFinanceForm"
          options={{
            headerTitle: 'Exerício',
          }}
          component={UpdateFinanceForm}
        />
        <Stack.Screen
          name="CreateGymTraining"
          options={{
            headerTitle: 'Novo Treinamento',
          }}
          component={CreateGymTraining}
        />
        <Stack.Screen
          name="UpdateGymTraining"
          options={{
            headerTitle: 'Treinamento',
          }}
          component={UpdateGymTraining}
        />
        <Stack.Screen
          name="UpdateGymExerciseForm"
          options={{
            headerTitle: 'Treinamento',
          }}
          component={UpdateGymExerciseForm}
        />
        <Stack.Screen
          name="TravelsHome"
          options={{
            headerTitle: 'Viagens',
          }}
          component={TravelsHome}
        />
        <Stack.Screen
          name="CityDetails"
          options={{
            headerTitle: 'Cidade',
          }}
          component={CityDetails}
        />
        <Stack.Screen
          name="CreateNewCityLink"
          options={{
            headerTitle: 'Novo Link',
          }}
          component={CreateNewCityLink}
        />
        <Stack.Screen
          name="SelectCountry"
          options={{
            headerTitle: 'Selecionar País',
          }}
          component={SelectCountry}
        />
        <Stack.Screen
          name="Cities"
          options={{
            headerTitle: 'Cidades',
          }}
          component={Cities}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
