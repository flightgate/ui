import { Image } from 'react-native';
import styled from 'styled-components/native';
import type { ColorKey, FontSizeKey } from '../../theme';
import { Text } from '../Text';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  source?: string;
  initials?: string;
  size?: AvatarSize;
  bg?: ColorKey | (string & {});
}

const SIZE_DIMENSIONS: Record<AvatarSize, number> = { sm: 32, md: 40, lg: 56, xl: 72 };
const SIZE_FONT: Record<AvatarSize, FontSizeKey> = { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' };

const StyledContainer = styled.View<{ $size: number; $bg?: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size / 2}px;
  background-color: ${({ theme, $bg }) =>
    $bg ? (theme.colors[$bg as ColorKey] ?? $bg) : theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export function Avatar({ source, initials, size = 'md', bg }: AvatarProps) {
  const dim = SIZE_DIMENSIONS[size];

  if (source) {
    return (
      <Image source={{ uri: source }} style={{ width: dim, height: dim, borderRadius: dim / 2 }} />
    );
  }

  return (
    <StyledContainer $size={dim} $bg={bg as string | undefined}>
      <Text size={SIZE_FONT[size]} color="white" align="center">
        {(initials ?? '?').substring(0, 2).toUpperCase()}
      </Text>
    </StyledContainer>
  );
}
