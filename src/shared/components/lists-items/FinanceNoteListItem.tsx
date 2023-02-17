import React from 'react';

import Text from '@/shared/components/Text';
import Card from '@/shared/components/containers/Card';
import {FinanceNote} from '@/shared/types';
import Row from '../containers/Row';
import PaymentAmountText from '../texts/PaymentAmountText';

interface FinanceNoteListItemProps {
  financeNote: FinanceNote;
  onPress: () => void;
}

const FinanceNoteListItem = ({
  financeNote,
  onPress,
}: FinanceNoteListItemProps) => (
  <Card onPress={onPress} style={{marginVertical: 5}}>
    <Row spaceBetween>
      <Text type="title">{financeNote.name}</Text>
      <PaymentAmountText
        amount={financeNote.amount}
        currency={financeNote.currency}
      />
    </Row>
    <Text style={{marginTop: 3}}>{financeNote.description}</Text>
  </Card>
);

export default FinanceNoteListItem;
