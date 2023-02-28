import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useContext} from 'react';
import {DimBackgroundContext} from '../contexts/DimBackgroundContext';

function useDimBackground() {
  const {isDim, setIsDim} = useContext(DimBackgroundContext);

  useFocusEffect(
    useCallback(() => {
      return () => setIsDim(false);
    }, [setIsDim]),
  );

  return {isDim, setIsDim};
}

export default useDimBackground;
