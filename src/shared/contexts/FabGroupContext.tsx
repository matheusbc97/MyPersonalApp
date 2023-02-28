import {
  createContext,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react';
import FabGroup, {
  FabAction,
  FabGroupHandles,
} from '../components/buttons/FabGroup';

interface FabGroupContextState {
  fabActions: FabAction[];
  setFabActions: (fabActions: FabAction[]) => void;
  isDimmed: boolean;
  setIsDimmed: React.Dispatch<React.SetStateAction<boolean>>;
  onRemove: () => void;
}

export const FabGroupContext = createContext({} as FabGroupContextState);

export function FabGroupProvider({children}: PropsWithChildren) {
  const [fabActions, setFabActions] = useState([] as FabAction[]);
  const [isDimmed, setIsDimmed] = useState(false);
  const fabGroupRef = useRef<FabGroupHandles>(null);

  const onRemove = useCallback(() => {
    fabGroupRef.current?.remove();
  }, []);

  return (
    <FabGroupContext.Provider
      value={{fabActions, setFabActions, isDimmed, setIsDimmed, onRemove}}>
      {children}
      <FabGroup ref={fabGroupRef} fabActions={fabActions} />
    </FabGroupContext.Provider>
  );
}
