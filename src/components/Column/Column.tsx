import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { SpacingKey } from '../../theme';

export interface ColumnProps {
  gap?: SpacingKey;
  children?: ReactNode;
}

const StyledColumn = styled.View.withConfig({ shouldForwardProp: (prop) => prop !== 'gap' })<
  Pick<ColumnProps, 'gap'>
>`
  flex-direction: column;
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : 0)}px;
`;

export function Column({ children, gap }: ColumnProps) {
  return <StyledColumn gap={gap}>{children}</StyledColumn>;
}
