import React from 'react';

import {
  CityListItem,
  CreateFab,
  FlatListWithFetchIndicator,
  ScreenWrapper,
} from '@/shared/components';
import {cities} from '@/mocks/cities';
import {ScreenProps} from '@/shared/types';

export default function Cities({navigation}: ScreenProps<'Cities'>) {
  return (
    <ScreenWrapper>
      <FlatListWithFetchIndicator
        style={{marginVertical: 5}}
        data={cities}
        emptyListText="Nenhum item encontrado"
        hasError={false}
        isLoading={false}
        keyExtractor={item => item.id}
        renderItem={({item: city}) => (
          <CityListItem
            city={city}
            onPress={() => navigation.navigate('CityDetails')}
          />
        )}
      />
      <CreateFab
        style={{position: 'absolute', bottom: 10, right: 10}}
        onPress={() => {}}
      />
    </ScreenWrapper>
  );
}
