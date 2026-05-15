import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { ColorKey, FontFamilyKey, FontSizeKey } from '../../theme';

export interface TextProps {
  size?: FontSizeKey;
  weight?: FontFamilyKey;
  color?: ColorKey | (string & {});
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}

const StyledText = styled.Text<TextProps>`
  font-size: ${({ theme, size = 'md' }) => theme.fontSize[size]}px;
  font-family: ${({ theme, weight = 'regular' }) => theme.fontFamily[weight]};
  color: ${({ theme, color = 'textPrimary' }) => theme.colors[color as ColorKey] ?? color};
  text-align: ${({ align = 'left' }) => align};
`;

export function Text(props: TextProps) {
  return <StyledText {...props} />;
}
