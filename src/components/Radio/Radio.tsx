import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import styled from 'styled-components/native';
import { Text } from '../Text';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: RadioOption[];
  disabled?: boolean;
}

const StyledGroup = styled.View`
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledRow = styled.TouchableOpacity<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const StyledOuter = styled.View<{ $selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.border};
  justify-content: center;
  align-items: center;
`;

const StyledInner = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export function Radio<T extends FieldValues>({
  name,
  control,
  options,
  disabled = false,
}: RadioProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <StyledGroup>
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <StyledRow
                key={option.value}
                $disabled={disabled}
                disabled={disabled}
                activeOpacity={0.7}
                onPress={() => onChange(option.value)}
              >
                <StyledOuter $selected={selected}>{selected && <StyledInner />}</StyledOuter>
                <Text size="md" color="textPrimary">
                  {option.label}
                </Text>
              </StyledRow>
            );
          })}
        </StyledGroup>
      )}
    />
  );
}
