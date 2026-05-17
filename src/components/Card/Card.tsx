import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { ColorToken, SpacingToken } from '../../theme';

export interface CardProps {
  children?: ReactNode;
  padding?: SpacingToken;
  bg?: ColorToken;
}

const CUSTOM_PROPS = new Set(['padding', 'bg']);

const StyledCard = styled.View.withConfig({
  shouldForwardProp: (prop) => !CUSTOM_PROPS.has(prop),
})<{ padding?: SpacingToken; bg?: ColorToken }>`
  background-color: ${({ theme, bg = 'bgPrimary' }) => theme.colors[bg]};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme, padding = 'md' }) => theme.spacing[padding]}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 2;
`;

export function Card({ children, padding, bg }: CardProps) {
  return (
    <StyledCard padding={padding} bg={bg}>
      {children}
    </StyledCard>
  );
}
