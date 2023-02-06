import React from 'react';
import {FlatList} from 'react-native';

import {Card, ScreenWrapper, Text} from '@/shared/components';
import {useGoBackOnlyOneTime} from '@/shared/hooks';
import {countries} from '@/mocks/countries';
import {Country, ScreenProps} from '@/shared/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '@/assets/theme';

interface CountryListItemProps {
  country: Country;
  onPress: () => void;
}

function CountryListItem({country, onPress}: CountryListItemProps) {
  return (
    <Card
      onPress={onPress}
      row
      style={{
        marginVertical: 5,
        justifyContent: 'space-between',
      }}>
      <Text type="title" style={{flex: 1}}>
        {country.name}
      </Text>

      <Icon name="pencil" color={theme.text} size={15} />
    </Card>
  );
}

const SelectCountry = ({route}: ScreenProps<'SelectCountry'>) => {
  const goBack = useGoBackOnlyOneTime();

  return (
    <ScreenWrapper>
      <FlatList
        style={{marginTop: 10}}
        data={countries}
        renderItem={({item: country}) => (
          <CountryListItem
            country={country}
            onPress={() => {
              route.params.onSelectCountry(country);
              goBack();
            }}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default SelectCountry;
