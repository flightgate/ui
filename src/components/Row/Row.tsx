import type { ReactNode } from 'react';
import type { AlignToken, JustifyToken, SpacingToken } from 'src/theme';
import styled from 'styled-components/native';

export interface RowProps {
  gap?: SpacingToken;
  alignItems?: AlignToken;
  justifyContent?: JustifyToken;
  children?: ReactNode;
}

const CUSTOM_PROPS = new Set(['gap', 'alignItems', 'justifyContent']);

const StyledRow = styled.View.withConfig({
  shouldForwardProp: (prop) => !CUSTOM_PROPS.has(prop),
})<Pick<RowProps, 'gap' | 'alignItems' | 'justifyContent'>>`
  flex-direction: row;
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : 0)}px;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : '')}
`;

export function Row({ children, gap, alignItems, justifyContent }: RowProps) {
  return (
    <StyledRow gap={gap} alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </StyledRow>
  );
}
