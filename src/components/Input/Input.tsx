import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import styled from 'styled-components/native';
import { Column } from '../Column';
import { Text } from '../Text';

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const StyledInput = styled.TextInput.attrs<{ $hasError: boolean }>(({ theme }) => ({
  placeholderTextColor: theme.colors.textTertiary,
}))`
  height: 56px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-width: 1px;
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.danger : theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export function Input<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  secureTextEntry,
}: InputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <Column gap="xs">
          {label && (
            <Text size="sm" color="textSecondary">
              {label}
            </Text>
          )}
          <StyledInput
            $hasError={!!error}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
          {error?.message && (
            <Text size="xs" color="danger">
              {error.message}
            </Text>
          )}
        </Column>
      )}
    />
  );
}
