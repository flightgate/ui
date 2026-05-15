import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { SpacingKey } from '../../theme';

export interface CardProps {
  children?: ReactNode;
  padding?: SpacingKey;
}

const StyledCard = styled.View.withConfig({ shouldForwardProp: (prop) => prop !== 'padding' })<{
  padding?: SpacingKey;
}>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme, padding = 'md' }) => theme.spacing[padding]}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 2;
`;

export function Card({ children, padding }: CardProps) {
  return <StyledCard padding={padding}>{children}</StyledCard>;
}
