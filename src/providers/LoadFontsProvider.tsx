import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { type PropsWithChildren, useMemo } from 'react';
import { LoadFontsContext } from 'src/contexts';

const LoadFontsProvider: React.FC<PropsWithChildren> = ({ children }) => {
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
