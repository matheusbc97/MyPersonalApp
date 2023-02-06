import React from 'react';
import {View} from 'react-native';

import {ScreenWrapper, MenuGridItem, Row} from '@/shared/components';
import {ScreenProps} from '@/shared/types';

function TravelsHome({navigation}: ScreenProps<'TravelsHome'>) {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}} />

      <View>
        <Row>
          <MenuGridItem
            iconName="map"
            iconFamily="FontAwesome"
            title="Planos"
            onPress={() => {}}
          />
          <MenuGridItem
            iconName="city"
            title="Cidades"
            onPress={() => navigation.navigate('Cities')}
          />
          <MenuGridItem
            iconName="mountain"
            title="Pontos Turísticos"
            onPress={() => {}}
          />
        </Row>
      </View>
    </ScreenWrapper>
  );
}

export default TravelsHome;
