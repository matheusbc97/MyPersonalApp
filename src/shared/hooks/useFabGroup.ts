import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useContext, useEffect} from 'react';
import {FabAction} from '../components/buttons/FabGroup';
import {FabGroupContext} from '../contexts/FabGroupContext';

function useFabGroup(fabActions: FabAction[]) {
  const {setFabActions, onRemove} = useContext(FabGroupContext);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (fabActions.length > 0) {
        setFabActions(fabActions);
      }
    }, [fabActions, setFabActions]),
  );

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      onRemove();
      // setFabActions([]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, setFabActions]);
}

export default useFabGroup;
