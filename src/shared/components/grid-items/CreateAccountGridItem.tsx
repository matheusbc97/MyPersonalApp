import React from 'react';

import {Text, Card} from '@/shared/components';

interface CreateAccountGridItemProps {
  onPress: () => void;
}

function CreateAccountGridItem({onPress}: CreateAccountGridItemProps) {
  return (
    <Card
      onPress={onPress}
      style={{
        width: 160,
        height: 70,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text type="title">Nova Conta</Text>
    </Card>
  );
}

export default CreateAccountGridItem;
