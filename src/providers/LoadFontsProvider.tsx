import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import type React from 'react';
import { useMemo } from 'react';
import { LoadFontsContext } from '../contexts';

const LoadFontsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loaded, error] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const value = useMemo(() => ({ loaded, error: error ?? null }), [loaded, error]);

  return <LoadFontsContext.Provider value={value}>{children}</LoadFontsContext.Provider>;
};

export { LoadFontsProvider };
