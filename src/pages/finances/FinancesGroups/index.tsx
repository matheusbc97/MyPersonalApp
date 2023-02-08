import React from 'react';
import {FlatList} from 'react-native';

import {GroupListItem, ScreenWrapper} from '@/shared/components';
import {groups} from '@/mocks/groups';
import {ScreenProps} from '@/shared/types';

const FinancesGroups = ({route, navigation}: ScreenProps<'FinancesGroups'>) => {
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
              navigation.pop();
            }}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default FinancesGroups;
