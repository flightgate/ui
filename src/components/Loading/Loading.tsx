import { ActivityIndicator, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export type LoadingSize = 'sm' | 'md' | 'lg';

export interface LoadingProps {
  size?: LoadingSize;
  color?: string;
  fullscreen?: boolean;
}

// ActivityIndicator nativamente só aceita 'small' | 'large' de forma confiável em iOS+Android.
// Para 'lg', usamos 'large' dentro de um View com scale — o transform no wrapper funciona
// de forma confiável, ao contrário de aplicar scale diretamente no ActivityIndicator nativo.
const RN_SIZE: Record<LoadingSize, 'small' | 'large'> = {
  sm: 'small',
  md: 'large',
  lg: 'large',
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
    // Wrapper View garante que o transform scale funcione de forma confiável
    // em componentes nativos como ActivityIndicator
    <View style={size === 'lg' ? { transform: [{ scale: 1.5 }] } : undefined}>
      <ActivityIndicator size={RN_SIZE[size]} color={resolvedColor} />
    </View>
  );

  if (fullscreen) {
    return <StyledFullscreen>{indicator}</StyledFullscreen>;
  }

  return <StyledInline>{indicator}</StyledInline>;
}
