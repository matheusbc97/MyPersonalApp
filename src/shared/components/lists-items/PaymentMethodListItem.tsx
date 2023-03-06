import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {PaymentMethod} from '@/shared/types';
import {Text, Card} from '@/shared/components';
import theme from '@/assets/theme';

interface PaymentMethodListItemProps {
  paymentMethod: PaymentMethod;
  onPress: () => void;
}

function PaymentMethodListItem({
  paymentMethod,
  onPress,
}: PaymentMethodListItemProps) {
  return (
    <Card
      onPress={onPress}
      row
      style={{
        marginVertical: 5,
        justifyContent: 'space-between',
      }}>
      <Text type="title" style={{flex: 1}}>
        {paymentMethod.name}
      </Text>

      <Icon name="pencil" color={theme.text} size={15} />
    </Card>
  );
}

export default PaymentMethodListItem;
