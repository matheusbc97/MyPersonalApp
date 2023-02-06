import React from 'react';

import {Card, Text} from '@/shared/components';
import {City} from '@/shared/types';

interface CityListItemProps {
  city: City;
  onPress: () => void;
}

export default function CityListItem({city, onPress}: CityListItemProps) {
  return (
    <Card onPress={onPress} style={{marginVertical: 5}}>
      <Text>
        {city.name} - {city.country.name}
      </Text>
    </Card>
  );
}
