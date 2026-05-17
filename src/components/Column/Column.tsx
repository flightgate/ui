import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { AlignToken, JustifyToken, SpacingToken } from '../../theme';

export interface ColumnProps {
  gap?: SpacingToken;
  alignItems?: AlignToken;
  justifyContent?: JustifyToken;
  children?: ReactNode;
}

const CUSTOM_PROPS = new Set(['gap', 'alignItems', 'justifyContent']);

const StyledColumn = styled.View.withConfig({
  shouldForwardProp: (prop) => !CUSTOM_PROPS.has(prop),
})<Pick<ColumnProps, 'gap' | 'alignItems' | 'justifyContent'>>`
  flex-direction: column;
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : 0)}px;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : '')}
`;

export function Column({ children, gap, alignItems, justifyContent }: ColumnProps) {
  return (
    <StyledColumn gap={gap} alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </StyledColumn>
  );
}
