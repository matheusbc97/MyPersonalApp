import {useGoBackOnlyOneTime} from '@/shared/hooks';
import CancelTextButton from './filled/text-buttons/CancelTextButton';

import {TextButtonProps} from './TextButton';

const CancelTextButtonWithGoBack = (
  props: Omit<TextButtonProps, 'onPress'>,
) => {
  const goBack = useGoBackOnlyOneTime();

  return <CancelTextButton onPress={goBack} {...props} />;
};

export default CancelTextButtonWithGoBack;
