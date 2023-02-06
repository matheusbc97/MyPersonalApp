import React from 'react';

import {Text, Card} from '@/shared/components';

interface CreateCreditCardGridItemProps {
  onPress: () => void;
}

function CreateCreditCardGridItem({onPress}: CreateCreditCardGridItemProps) {
  return (
    <Card
      onPress={onPress}
      style={{
        width: 175,
        height: 90,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text type="title">Novo Cartão</Text>
    </Card>
  );
}

export default CreateCreditCardGridItem;
