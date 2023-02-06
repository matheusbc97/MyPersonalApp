import React from 'react';

import {FinanceType} from '@/shared/types';
import {CurrencyValue} from '@/shared/types/Currency';
import Text from '@/shared/components/Text';

interface PaymentAmountTextProp {
  amount: number;
  currency: CurrencyValue;
  type: FinanceType;
}

const PaymentAmountText: React.FC<PaymentAmountTextProp> = ({amount, type}) => {
  return (
    <Text style={{color: type === 'receipt' ? '#29A045' : '#C63131'}}>
      {type === 'receipt' ? '+' : '-'}R$ {amount}
    </Text>
  );
};

export default PaymentAmountText;
