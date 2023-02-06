import {useNavigation} from '@react-navigation/core';
import {useCallback, useRef} from 'react';

const useGoBackOnlyOneTime = () => {
  const wentBackRef = useRef(false);
  const navigation = useNavigation<any>();

  const goBack = useCallback(() => {
    if (!wentBackRef.current) {
      navigation.goBack();
      wentBackRef.current = true;
    }
  }, [wentBackRef, navigation]);

  return goBack;
};

export default useGoBackOnlyOneTime;
