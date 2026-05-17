import type { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import type { BorderRadiusToken, ColorToken, SpacingToken } from '../../theme';
import { Row } from '../Row';
import { Text } from '../Text';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  gap?: SpacingToken;
  bg?: ColorToken;
  color?: ColorToken;
  borderColor?: ColorToken;
  radius?: BorderRadiusToken;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

const SIZE_HEIGHT: Record<ButtonSize, number> = { sm: 40, md: 48, lg: 56 };

const StyledButton = styled.TouchableOpacity<{
  $bg: ColorToken;
  $borderColor?: ColorToken;
  $radius: BorderRadiusToken;
  $size: ButtonSize;
}>`
  height: ${({ $size }) => SIZE_HEIGHT[$size]}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme, $bg, disabled }) =>
    disabled ? theme.colors.bgSecondary : theme.colors[$bg]};
  border-width: ${({ $borderColor }) => ($borderColor ? 1 : 0)}px;
  border-color: ${({ theme, $borderColor }) =>
    $borderColor ? theme.colors[$borderColor] : 'transparent'};
  border-radius: ${({ theme, $radius }) => theme.borderRadius[$radius]}px;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export function Button({
  children,
  prefixIcon,
  suffixIcon,
  gap = 'xs',
  bg = 'primary',
  color,
  borderColor,
  radius = 'md',
  size = 'md',
  disabled,
  loading,
  onPress,
}: ButtonProps) {
  const theme = useTheme();

  if (__DEV__ && !children && !prefixIcon && !suffixIcon) {
    console.error('[@flightgate/ui] Button: requires children, prefixIcon, or suffixIcon');
  }

  const textColor: ColorToken = disabled
    ? 'textTertiary'
    : (color ?? (bg === 'transparent' ? 'primary' : 'white'));

  const indicatorColor = bg === 'transparent' ? theme.colors.primary : theme.colors.white;

  return (
    <StyledButton
      $bg={bg}
      $borderColor={borderColor}
      $radius={radius}
      $size={size}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <Row gap={gap} alignItems="center">
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
