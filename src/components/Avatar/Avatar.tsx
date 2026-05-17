import { Image } from 'react-native';
import { Text } from 'src/components';
import type { ColorToken, FontSizeToken } from 'src/theme';
import styled from 'styled-components/native';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  source?: string;
  initials?: string;
  size?: AvatarSize;
  bg?: ColorToken;
}

const SIZE_DIMENSIONS: Record<AvatarSize, number> = { sm: 32, md: 40, lg: 56, xl: 72 };
const SIZE_FONT: Record<AvatarSize, FontSizeToken> = { sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' };

const StyledContainer = styled.View<{ $size: number; $bg: ColorToken }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size / 2}px;
  background-color: ${({ theme, $bg }) => theme.colors[$bg]};
  justify-content: center;
  align-items: center;
`;

export function Avatar({ source, initials, size = 'md', bg = 'primary' }: AvatarProps) {
  const dim = SIZE_DIMENSIONS[size];

  if (source) {
    return (
      <Image source={{ uri: source }} style={{ width: dim, height: dim, borderRadius: dim / 2 }} />
    );
  }

  return (
    <StyledContainer $size={dim} $bg={bg}>
      <Text size={SIZE_FONT[size]} color="white" align="center">
        {(initials ?? '?').substring(0, 2).toUpperCase()}
      </Text>
    </StyledContainer>
  );
}
