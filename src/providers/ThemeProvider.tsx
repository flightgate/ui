import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { ThemeColors } from 'src/theme';
import { createTheme } from 'src/theme';
import { ThemeProvider as StyledProvider } from 'styled-components/native';

interface ThemeProviderProps extends ThemeColors {
  children: ReactNode;
}

const ThemeProvider = ({ children, primary, secondary, tertiary }: ThemeProviderProps) => {
  const theme = useMemo(
    () => createTheme({ primary, secondary, tertiary }),
    [primary, secondary, tertiary],
  );
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export { ThemeProvider };
