import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form';
import styled from 'styled-components/native';
import { Dropdown, type DropdownOption } from '../Dropdown';
import { Text } from '../Text';

export interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: DropdownOption[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const StyledWrapper = styled.View`
  gap: ${({ theme }) => theme.spacing.xxs}px;
`;

const StyledError = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
`;

export function Select<T extends FieldValues>({
  name,
  control,
  options,
  label,
  placeholder,
  disabled = false,
}: SelectProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <StyledWrapper>
          {label && (
            <Text size="sm" weight="medium" color="textSecondary">
              {label}
            </Text>
          )}
          <Dropdown
            options={options}
            value={value as string | undefined}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
          />
          {error?.message && (
            <StyledError>
              <Text size="xs" color="danger">
                {error.message}
              </Text>
            </StyledError>
          )}
        </StyledWrapper>
      )}
    />
  );
}
