import {useContext} from 'react';
import {FabGroupContext} from '../contexts/FabGroupContext';

function useFabGroup() {
  const {setFabActions} = useContext(FabGroupContext);

  return setFabActions;
}

export default useFabGroup;
