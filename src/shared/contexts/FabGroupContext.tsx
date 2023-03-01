import {createContext, PropsWithChildren, useState} from 'react';
import FabGroup, {FabAction} from '../components/buttons/FabGroup';

interface FabGroupContextState {
  fabActions: FabAction[];
  setFabActions: (fabActions: FabAction[]) => void;
}

export const FabGroupContext = createContext({} as FabGroupContextState);

export function FabGroupProvider({children}: PropsWithChildren) {
  const [fabActions, setFabActions] = useState([] as FabAction[]);

  return (
    <FabGroupContext.Provider
      value={{
        fabActions,
        setFabActions,
      }}>
      {children}
      <FabGroup fabActions={fabActions} setFabActions={setFabActions} />
    </FabGroupContext.Provider>
  );
}
