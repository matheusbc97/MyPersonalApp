import React from 'react';

import {Text, Row, Card, PaymentAmountText} from '@/shared/components';
import {BankAccount} from '@/shared/types';

interface AccountGridItemProps {
  account: BankAccount;
}

function AccountGridItem({account}: AccountGridItemProps) {
  return (
    <Card
      style={{width: 160, height: 70, marginHorizontal: 5, marginVertical: 5}}>
      <Text type="title">{account.title}</Text>
      {account.monthlyDebt && (
        <Row style={{marginTop: 10}}>
          <Text style={{marginRight: 10}}>Déb. Men:</Text>
          <PaymentAmountText
            amount={account.monthlyDebt.amount}
            currency={account.monthlyDebt.currency}
            type={account.monthlyDebt.type}
          />
        </Row>
      )}
    </Card>
  );
}

export default AccountGridItem;
