import React from 'react';
import {View} from 'react-native';

import {ScreenWrapper, MenuGridItem, Row} from '@/shared/components';
import {StackParams} from '@/navigation';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<StackParams, 'FinancesHome'>;
}

function FinancesHome({navigation}: Props) {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}} />

      <View>
        <Row>
          <MenuGridItem
            iconName="clipboard"
            iconFamily="FontAwesome"
            title={'Notas'}
            onPress={() => navigation.navigate('FinancesNotes')}
          />
          <MenuGridItem iconName="briefcase" title={'PJ'} onPress={() => {}} />
        </Row>
        <Row>
          <MenuGridItem
            iconName="calendar-alt"
            title={'Mensais'}
            onPress={() => navigation.navigate('MonthlyFinances')}
          />
          <MenuGridItem
            iconName="university"
            title={'Bancos'}
            onPress={() => navigation.navigate('Banks')}
          />
        </Row>
      </View>
    </ScreenWrapper>
  );
}

export default FinancesHome;
