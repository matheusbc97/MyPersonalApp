import React from 'react';
import {FlatList} from 'react-native';

import {PaymentMethodListItem, ScreenWrapper} from '@/shared/components';
import {PaymentMethod, ScreenProps} from '@/shared/types';

const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: 'Cartão de crédito',
  },
  {
    id: 2,
    name: 'pix',
  },
];

const FinancesPaymentMethods = ({
  route,
  navigation,
}: ScreenProps<'FinancesPaymentMethods'>) => {
  return (
    <ScreenWrapper>
      <FlatList
        style={{marginTop: 10}}
        data={paymentMethods}
        renderItem={({item: paymentMethod}) => (
          <PaymentMethodListItem
            paymentMethod={paymentMethod}
            onPress={() => {
              route.params.onSelectPaymentMethod(paymentMethod);
              navigation.pop();
            }}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default FinancesPaymentMethods;
