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

function FinanceListItem({finance, onPress}: Props) {
  const isReceipt = finance.amount > 0;
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
        {isReceipt ? 'Meio Rec' : 'Mei Pag'}: {finance.paymentMethod}
      </Text>

      <Row style={{marginTop: 5}} spaceBetween>
        <Text>
          {finance.fixedDate ? 'Fixo' : 'Variável'}: Dia {finance.day}
        </Text>
        <PaymentAmountText
          amount={finance.amount}
          currency={finance.currencyValue}
        />
      </Row>
    </Card>
  );
}

export default FinanceListItem;
