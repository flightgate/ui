import { useRef } from 'react';
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import { Animated } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Text } from '../Text';

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

export function Switch<T extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
}: SwitchProps<T>) {
  const theme = useTheme();
  const translateX = useRef(new Animated.Value(0)).current;

  const animate = (on: boolean) => {
    Animated.spring(translateX, {
      toValue: on ? THUMB_TRAVEL : 0,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const isOn = !!value;

        const handlePress = () => {
          const next = !isOn;
          animate(next);
          onChange(next);
        };

        return (
          <StyledRow
            $disabled={disabled}
            disabled={disabled}
            activeOpacity={0.8}
            onPress={handlePress}
          >
            <StyledTrack $on={isOn}>
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
      }}
    />
  );
}
