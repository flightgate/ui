import type { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import type { ColorKey, SpacingKey } from '../../theme';
import { Row } from '../Row';
import { Text } from '../Text';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  gap?: SpacingKey;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

const VARIANT_TEXT_COLOR: Record<ButtonVariant, ColorKey> = {
  primary: 'white',
  secondary: 'primary',
  ghost: 'primary',
  danger: 'white',
};

const SIZE_HEIGHT: Record<ButtonSize, number> = { sm: 40, md: 48, lg: 56 };

const StyledButton = styled.TouchableOpacity<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  height: ${({ $size }) => SIZE_HEIGHT[$size]}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme, $variant, disabled }) =>
    disabled
      ? theme.colors.bgSecondary
      : $variant === 'primary'
        ? theme.colors.primary
        : $variant === 'danger'
          ? theme.colors.danger
          : 'transparent'};
  border-width: ${({ $variant }) => ($variant === 'secondary' ? 1 : 0)}px;
  border-color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.borderPrimary : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export function Button({
  children,
  prefixIcon,
  suffixIcon,
  gap = 'xs',
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  onPress,
}: ButtonProps) {
  const theme = useTheme();

  if (__DEV__ && !children && !prefixIcon && !suffixIcon) {
    console.error('[@flightgate/ui] Button: requires children, prefixIcon, or suffixIcon');
  }

  const textColor: ColorKey = disabled ? 'textTertiary' : VARIANT_TEXT_COLOR[variant];
  const indicatorColor =
    variant === 'secondary' || variant === 'ghost' ? theme.colors.primary : theme.colors.white;

  return (
    <StyledButton $variant={variant} $size={size} disabled={disabled || loading} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <Row gap={gap} style={{ alignItems: 'center' }}>
          {prefixIcon}
          {children && (
            <Text weight="medium" color={textColor}>
              {children}
            </Text>
          )}
          {suffixIcon}
        </Row>
      )}
    </StyledButton>
  );
}
