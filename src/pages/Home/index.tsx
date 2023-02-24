import React from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ScreenWrapper, MenuGridItem, Row} from '@/shared/components';
import {StackParams} from '@/navigation';

interface Props {
  navigation: NavigationProp<StackParams, 'Home'>;
}

function Home({navigation}: Props) {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}} />

      <View>
        <Row>
          <MenuGridItem
            iconName="piggy-bank"
            title="Finanças"
            onPress={() => navigation.navigate('FinancesHome')}
          />
          <MenuGridItem iconName="rocket" title={'Metas'} onPress={() => {}} />
          <MenuGridItem
            iconName="heartbeat"
            title="Saúde"
            onPress={() => navigation.navigate('HealthHome')}
          />
          {/*<MenuGridItem
            iconName="map-marked-alt"
            title="Viagens"
            onPress={() => navigation.navigate('TravelsHome')}
          />*/}
        </Row>
      </View>
    </ScreenWrapper>
  );
}

export default Home;
