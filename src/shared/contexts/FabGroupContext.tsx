import {createContext, PropsWithChildren, useState} from 'react';
import FabGroup, {FabAction} from '../components/buttons/FabGroup';

interface FabGroupContextState {
  fabActions: FabAction[];
  setFabActions: (fabActions: FabAction[]) => void;
  isDimmed: boolean;
  setIsDimmed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FabGroupContext = createContext({} as FabGroupContextState);

export function FabGroupProvider({children}: PropsWithChildren) {
  const [fabActions, setFabActions] = useState([] as FabAction[]);
  const [isDimmed, setIsDimmed] = useState(false);

  return (
    <FabGroupContext.Provider
      value={{fabActions, setFabActions, isDimmed, setIsDimmed}}>
      <FabGroup fabActions={fabActions} />
      {children}
    </FabGroupContext.Provider>
  );
}
