import React from 'react';

import {Finance} from '@/shared/types';
import {
  Text,
  Card,
  Row,
  GroupIcon,
  PaidChip,
  PaymentAmountText,
} from '@/shared/components';

interface Props {
  finance: Finance;
  onPress: () => void;
}

const FinanceListItem: React.FC<Props> = ({finance, onPress}) => {
  return (
    <Card onPress={onPress} style={{marginVertical: 5}}>
      <Row>
        <Text type="title" style={{flex: 1}}>
          {finance.name}
        </Text>
        {finance.paid && <PaidChip style={{marginRight: 5}} />}
        <GroupIcon />
      </Row>

      <Text>
        {finance.type === 'receipt' ? 'Meio Rec' : 'Mei Pag'}:{' '}
        {finance.paymentMethod}
      </Text>

      <Row style={{marginTop: 5}} spaceBetween>
        <Text>{finance.fixedDate ? 'Fixo' : 'Variável'}: Dia 25</Text>
        <PaymentAmountText
          type={finance.type}
          amount={finance.amount}
          currency={finance.currencyValue}
        />
      </Row>
    </Card>
  );
};

export default FinanceListItem;
