import React, {useEffect} from 'react';

import {
  ScreenWrapper,
  SubHeader,
  GymTrainingListItem,
  CreateFab,
  FlatListWithFetchIndicator,
} from '@/shared/components';
import TitleWithSeparator from '@/shared/components/section-headers/TitleWithSeparatorSectionHeader';
import {useFetchGymTrainings} from '@/shared/hooks';
import {ScreenProps} from '@/shared/types';

const GymDetails = ({navigation}: ScreenProps<'GymDetails'>) => {
  const {gymTrainings, hasError, isLoading} = useFetchGymTrainings();

  return (
    <ScreenWrapper>
      <SubHeader iconName="dumbbell" title="Academia" />
      <TitleWithSeparator title="Treinos" />
      <FlatListWithFetchIndicator
        emptyListText="Nenhum Item encontrado"
        data={gymTrainings}
        hasError={hasError}
        isLoading={isLoading}
        keyExtractor={gymTraining => gymTraining.id}
        renderItem={({item: gymTraining}) => (
          <GymTrainingListItem
            onPress={() =>
              navigation.navigate('GymTrainingDetails', {
                gymTraining,
              })
            }
            key={gymTraining.id}
            gymTraining={gymTraining}
          />
        )}
      />
      <CreateFab
        onPress={() => navigation.navigate('CreateGymTraining')}
        style={{alignSelf: 'flex-end'}}
      />
    </ScreenWrapper>
  );
};

export default GymDetails;
