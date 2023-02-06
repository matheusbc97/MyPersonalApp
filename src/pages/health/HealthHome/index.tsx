import React from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ScreenWrapper, MenuGridItem, Row} from '@/shared/components';
import {StackParams} from '@/navigation';

interface Props {
  navigation: NavigationProp<StackParams, 'HealthHome'>;
}

function HealthHome({navigation}: Props) {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}} />

      <Row>
        <MenuGridItem
          iconName="dumbbell"
          title="Academia"
          onPress={() => navigation.navigate('GymDetails')}
        />
        <MenuGridItem
          iconName="balance-scale"
          title="Pesos"
          onPress={() => {}}
        />
        <MenuGridItem
          iconName="stethoscope"
          title="Médicos"
          onPress={() => {}}
        />
      </Row>
    </ScreenWrapper>
  );
}

export default HealthHome;
