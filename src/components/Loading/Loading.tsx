import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export type LoadingSize = 'sm' | 'md' | 'lg';

export interface LoadingProps {
  size?: LoadingSize;
  color?: string;
  fullscreen?: boolean;
}

const RN_SIZE: Record<LoadingSize, 'small' | 'large'> = {
  sm: 'small',
  md: 'large',
  lg: 'large',
};

const SCALE: Record<LoadingSize, number> = {
  sm: 1,
  md: 1,
  lg: 1.5,
};

const StyledFullscreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

const StyledInline = styled.View`
  justify-content: center;
  align-items: center;
`;

export function Loading({ size = 'md', color, fullscreen = false }: LoadingProps) {
  const theme = useTheme();
  const resolvedColor = color ?? theme.colors.primary;

  const indicator = (
    <ActivityIndicator
      size={RN_SIZE[size]}
      color={resolvedColor}
      style={{ transform: [{ scale: SCALE[size] }] }}
    />
  );

  if (fullscreen) {
    return <StyledFullscreen>{indicator}</StyledFullscreen>;
  }

  return <StyledInline>{indicator}</StyledInline>;
}
