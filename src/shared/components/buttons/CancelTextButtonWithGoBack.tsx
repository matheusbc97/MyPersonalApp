import {useNavigation} from '@react-navigation/native';
import CancelTextButton from './filled/text-buttons/CancelTextButton';

import {TextButtonProps} from './TextButton';

const CancelTextButtonWithGoBack = (
  props: Omit<TextButtonProps, 'onPress'>,
) => {
  const navigation = useNavigation<any>();

  return <CancelTextButton onPress={() => navigation.pop()} {...props} />;
};

export default CancelTextButtonWithGoBack;
