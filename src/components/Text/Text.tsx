import type { ReactNode } from 'react';
import type { ColorToken, FontFamilyToken, FontSizeToken } from 'src/theme';
import styled from 'styled-components/native';

export interface TextProps {
  size?: FontSizeToken;
  weight?: FontFamilyToken;
  color?: ColorToken;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

const StyledText = styled.Text<TextProps>`
  font-size: ${({ theme, size = 'md' }) => theme.fontSize[size]}px;
  font-family: ${({ theme, weight = 'regular' }) => theme.fontFamily[weight]};
  color: ${({ theme, color = 'textPrimary' }) => theme.colors[color]};
  text-align: ${({ align = 'left' }) => align};
`;

export function Text(props: TextProps) {
  return <StyledText {...props} />;
}
