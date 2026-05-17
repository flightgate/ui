import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { SpacingToken } from '../../theme';

export interface RowProps {
  gap?: SpacingToken;
  children?: ReactNode;
}

const StyledRow = styled.View.withConfig({ shouldForwardProp: (prop) => prop !== 'gap' })<
  Pick<RowProps, 'gap'>
>`
  flex-direction: row;
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : 0)}px;
`;

export function Row({ children, gap }: RowProps) {
  return <StyledRow gap={gap}>{children}</StyledRow>;
}
