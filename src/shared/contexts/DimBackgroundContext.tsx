import {createContext, PropsWithChildren, useState} from 'react';
import DimBackground from '../components/DimBackground';

interface DimBackgroundContextState {
  isDim: boolean;
  setIsDim: (isDim: boolean) => void;
}

export const DimBackgroundContext = createContext(
  {} as DimBackgroundContextState,
);

export function DimBackgroundProvider({children}: PropsWithChildren) {
  const [isDim, setIsDim] = useState(false);

  return (
    <DimBackgroundContext.Provider value={{isDim, setIsDim}}>
      {children}
      <DimBackground isDim={isDim} />
    </DimBackgroundContext.Provider>
  );
}
