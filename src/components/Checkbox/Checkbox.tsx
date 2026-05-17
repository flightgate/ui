import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import { Text } from 'src/components';
import styled from 'styled-components/native';

export interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  disabled?: boolean;
}

const StyledRow = styled.TouchableOpacity<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const StyledBox = styled.View<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  border-width: 2px;
  border-color: ${({ theme, $checked }) => ($checked ? theme.colors.primary : theme.colors.borderPrimary)};
  background-color: ${({ theme, $checked }) => ($checked ? theme.colors.primary : 'transparent')};
  justify-content: center;
  align-items: center;
`;

// Sem transform aqui — CSS transform strings não são suportadas em styled-components/native.
// O rotate é aplicado via style prop no JSX.
const StyledCheck = styled.View`
  width: 5px;
  height: 9px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export function Checkbox<T extends FieldValues>({
  name,
  control,
  label,
  disabled = false,
}: CheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <StyledRow
          $disabled={disabled}
          disabled={disabled}
          activeOpacity={0.7}
          onPress={() => onChange(!value)}
        >
          <StyledBox $checked={!!value}>
            {!!value && (
              <StyledCheck
                style={{ transform: [{ rotate: '45deg' }, { translateX: -1 }, { translateY: -1 }] }}
              />
            )}
          </StyledBox>
          {label && (
            <Text size="md" color="textPrimary">
              {label}
            </Text>
          )}
        </StyledRow>
      )}
    />
  );
}
