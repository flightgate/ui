import type { ReactNode } from 'react';
import { View } from 'react-native';
import { getPadding, type PaddingProps } from 'src/theme';
import { useTheme } from 'styled-components/native';

export interface PaddingComponentProps extends PaddingProps {
  children?: ReactNode;
}

export function Padding({ children, ...paddingProps }: PaddingComponentProps) {
  const theme = useTheme();

  return <View style={getPadding(theme, paddingProps)}>{children}</View>;
}
