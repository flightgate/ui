import { useEffect, useRef } from 'react';
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import { Animated } from 'react-native';
import { Text } from 'src/components';
import styled, { useTheme } from 'styled-components/native';

export interface SwitchProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  disabled?: boolean;
}

const TRACK_WIDTH = 44;
const TRACK_HEIGHT = 24;
const THUMB_SIZE = 18;
const THUMB_OFFSET = 3;
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_OFFSET * 2;

const StyledRow = styled.TouchableOpacity<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const StyledTrack = styled.View<{ $on: boolean }>`
  width: ${TRACK_WIDTH}px;
  height: ${TRACK_HEIGHT}px;
  border-radius: ${TRACK_HEIGHT / 2}px;
  background-color: ${({ theme, $on }) => ($on ? theme.colors.primary : theme.colors.bgSecondary)};
  justify-content: center;
  padding: 0 ${THUMB_OFFSET}px;
`;

interface SwitchControlProps {
  value: boolean;
  onChange: (v: boolean) => void;
  disabled: boolean;
  label?: string;
}

// Componente interno separado para que useRef possa inicializar com o valor correto do field
// e useEffect sincronize mudanças externas (e.g. reset do formulário).
function SwitchControl({ value, onChange, disabled, label }: SwitchControlProps) {
  const theme = useTheme();
  const translateX = useRef(new Animated.Value(value ? THUMB_TRAVEL : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? THUMB_TRAVEL : 0,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  }, [value, translateX]);

  return (
    <StyledRow
      $disabled={disabled}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={() => onChange(!value)}
    >
      <StyledTrack $on={value}>
        <Animated.View
          style={{
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            borderRadius: THUMB_SIZE / 2,
            backgroundColor: theme.colors.white,
            transform: [{ translateX }],
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 2,
          }}
        />
      </StyledTrack>
      {label && (
        <Text size="md" color="textPrimary">
          {label}
        </Text>
      )}
    </StyledRow>
  );
}

export function Switch<T extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
}: SwitchProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <SwitchControl value={!!value} onChange={onChange} disabled={disabled} label={label} />
      )}
    />
  );
}
