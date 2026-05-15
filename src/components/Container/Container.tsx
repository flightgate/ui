import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { ColorKey, SpacingKey } from '../../theme';

export interface ContainerProps {
  bg?: ColorKey | (string & {});
  flex?: number;
  width?: string | number;
  height?: string | number;
  padding?: SpacingKey;
  paddingHorizontal?: SpacingKey;
  paddingVertical?: SpacingKey;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  children?: ReactNode;
}

type ContainerStyleProps = Omit<ContainerProps, 'children'>;

const CUSTOM_PROPS = new Set<string>([
  'bg',
  'flex',
  'width',
  'height',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'justifyContent',
  'alignItems',
]);

const StyledContainer = styled.View.withConfig({
  shouldForwardProp: (prop) => !CUSTOM_PROPS.has(prop),
})<ContainerStyleProps>`
  ${({ theme, bg }) => (bg ? `background-color: ${theme.colors[bg as ColorKey] ?? bg};` : '')}
  ${({ flex }) => (flex !== undefined ? `flex: ${flex};` : '')}
  ${({ width }) => (width !== undefined ? `width: ${width};` : '')}
  ${({ height }) => (height !== undefined ? `height: ${height};` : '')}
  ${({ theme, padding }) => (padding ? `padding: ${theme.spacing[padding]}px;` : '')}
  ${({ theme, paddingHorizontal }) =>
    paddingHorizontal ? `padding-horizontal: ${theme.spacing[paddingHorizontal]}px;` : ''}
  ${({ theme, paddingVertical }) =>
    paddingVertical ? `padding-vertical: ${theme.spacing[paddingVertical]}px;` : ''}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : '')}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
`;

export function Container({ children, ...styleProps }: ContainerProps) {
  return <StyledContainer {...styleProps}>{children}</StyledContainer>;
}
