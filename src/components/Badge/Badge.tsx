import { Text } from 'src/components';
import type { ColorToken } from 'src/theme';
import styled from 'styled-components/native';

export type BadgeVariant = 'success' | 'danger' | 'warning' | 'info' | 'neutral';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const BADGE_BG: Record<BadgeVariant, ColorToken> = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  neutral: 'bgSecondary',
};

const BADGE_TEXT: Record<BadgeVariant, ColorToken> = {
  success: 'white',
  danger: 'white',
  warning: 'black',
  info: 'white',
  neutral: 'textPrimary',
};

const StyledBadge = styled.View<{ $variant: BadgeVariant }>`
  align-self: flex-start;
  padding: ${({ theme }) => theme.spacing.xxs}px ${({ theme }) => theme.spacing.xs}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme, $variant }) => theme.colors[BADGE_BG[$variant]]};
  width: fit-content;
`;

export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  return (
    <StyledBadge $variant={variant}>
      <Text size="xs" weight="medium" color={BADGE_TEXT[variant]}>
        {label}
      </Text>
    </StyledBadge>
  );
}
