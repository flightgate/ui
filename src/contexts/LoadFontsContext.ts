import { createContext, useContext } from 'react';

interface LoadFontsValue {
  loaded: boolean;
  error: Error | null;
}

export const LoadFontsContext = createContext<LoadFontsValue>({
  loaded: false,
  error: null,
});

export const useLoadFonts = () => useContext(LoadFontsContext);
