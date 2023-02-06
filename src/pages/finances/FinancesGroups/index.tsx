import React from 'react';
import {FlatList} from 'react-native';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {GroupListItem, ScreenWrapper} from '@/shared/components';
import {StackParams} from '@/navigation';
import {useGoBackOnlyOneTime} from '@/shared/hooks';
import {groups} from '@/mocks/groups';

interface Props {
  route: RouteProp<StackParams, 'FinancesGroups'>;
  navigation: StackNavigationProp<StackParams, 'FinancesGroups'>;
}

const FinancesGroups = ({route}: Props) => {
  const goBack = useGoBackOnlyOneTime();

  return (
    <ScreenWrapper>
      <FlatList
        style={{marginTop: 10}}
        data={groups}
        renderItem={({item: group}) => (
          <GroupListItem
            group={group}
            onPress={() => {
              route.params.onSelectGroup(group);
              goBack();
            }}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default FinancesGroups;
