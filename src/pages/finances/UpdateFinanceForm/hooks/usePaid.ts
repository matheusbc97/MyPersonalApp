import {useCreatePayment, useDeletePayment} from '@/shared/hooks';
import {Finance} from '@/shared/types';
import {useState} from 'react';

interface UsePaidParams {
  finance: Finance;
  initialValue: boolean;
}

function usePaid({finance, initialValue}: UsePaidParams) {
  const [paid, setPaid] = useState(initialValue);

  const createPayment = useCreatePayment();
  const deletePayment = useDeletePayment();

  const makePayment = async (pay: boolean) => {
    try {
      if (pay) {
        await createPayment({financeId: finance.id, date: new Date()});
      } else {
        console.log('paid', finance);
        const paymentId = finance.payment.id;
        console.log('paymentId', paymentId);

        if (paymentId) {
          await deletePayment(paymentId);
        }
      }

      setPaid(pay);
    } catch (error) {}
  };

  return {paid, makePayment};
}

export default usePaid;
