import type { ReactNode } from 'react';
import styled from 'styled-components/native';
import type { ColorKey, SpacingKey } from '../../theme';

export interface CardProps {
  children?: ReactNode;
  padding?: SpacingKey;
  bg?: ColorKey | (string & {});
}

const CUSTOM_PROPS = new Set(['padding', 'bg']);

const StyledCard = styled.View.withConfig({
  shouldForwardProp: (prop) => !CUSTOM_PROPS.has(prop),
})<{ padding?: SpacingKey; bg?: string }>`
  background-color: ${({ theme, bg }) =>
    bg ? (theme.colors[bg as ColorKey] ?? bg) : theme.colors.bgPrimary};
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
    <StyledCard padding={padding} bg={bg as string | undefined}>
      {children}
    </StyledCard>
  );
}
