import {CurrencyValue} from '@/shared/types/Currency';
import Text from '@/shared/components/Text';

interface PaymentAmountTextProp {
  amount: number;
  currency: CurrencyValue;
}

const PaymentAmountText: React.FC<PaymentAmountTextProp> = ({amount}) => {
  const isReceipt = amount > 0;

  return (
    <Text style={{color: isReceipt ? '#29A045' : '#C63131'}}>
      {isReceipt ? '+' : '-'}R$ {amount}
    </Text>
  );
};

export default PaymentAmountText;
