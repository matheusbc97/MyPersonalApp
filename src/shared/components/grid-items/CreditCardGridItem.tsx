import React from 'react';

import {Text, Row, Card, PaymentAmountText} from '@/shared/components';
import {CreditCardWithCurrentBill} from '@/shared/types';
import formatDate from '@/shared/utils/formatDate';

interface Props {
  creditCard: CreditCardWithCurrentBill;
}

function CreditCardGridItem({creditCard}: Props) {
  return (
    <Card
      style={{width: 175, height: 90, marginHorizontal: 5, marginVertical: 5}}>
      <Text type="title">**** **** **** {creditCard.lastFourNumbers}</Text>
      <Row spaceBetween style={{marginTop: 5}}>
        <Text>val: {formatDate(creditCard.expirationDate, 'date/Month')}</Text>
        <Text>venc: {creditCard.dueDay}</Text>
      </Row>
      {!!creditCard.currentBill && (
        <Row spaceBetween style={{marginTop: 10}}>
          <Text style={{marginRight: 10}}>Fatura:</Text>
          <PaymentAmountText
            amount={creditCard.currentBill.amount}
            currency={creditCard.currentBill.currency}
            type="expense"
          />
        </Row>
      )}
    </Card>
  );
}

export default CreditCardGridItem;
