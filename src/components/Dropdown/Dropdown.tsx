import { useState } from 'react';
import { Modal, Pressable, ScrollView } from 'react-native';
import { Text } from 'src/components';
import styled from 'styled-components/native';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const StyledTrigger = styled.TouchableOpacity<{ $disabled: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.bgSecondary : theme.colors.bgPrimary};
`;

// Transform via CSS string não funciona no React Native — aplicado via style prop no JSX
const StyledChevron = styled.View`
  width: 0;
  height: 0;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 6px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
`;

const StyledMenu = styled.View`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  overflow: hidden;
  max-height: 300px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 12px;
  elevation: 8;
`;

const StyledOption = styled.TouchableOpacity<{ $selected: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.bgSecondary : theme.colors.bgPrimary};
`;

export function Dropdown({
  options,
  value,
  placeholder = 'Select…',
  disabled = false,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <>
      <StyledTrigger
        $disabled={disabled}
        disabled={disabled}
        onPress={() => setOpen(true)}
        activeOpacity={0.7}
      >
        <Text size="md" color={selected ? 'textPrimary' : 'textTertiary'}>
          {selected ? selected.label : placeholder}
        </Text>
        {/* transform aplicado via style — CSS transform strings não são suportadas em styled-components/native */}
        <StyledChevron style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }} />
      </StyledTrigger>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={{ flex: 1 }} onPress={() => setOpen(false)}>
          <StyledOverlay>
            <Pressable>
              <StyledMenu>
                <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
                  {options.map((option) => (
                    <StyledOption
                      key={option.value}
                      $selected={option.value === value}
                      onPress={() => handleSelect(option.value)}
                      activeOpacity={0.7}
                    >
                      <Text
                        size="md"
                        color={option.value === value ? 'primary' : 'textPrimary'}
                        weight={option.value === value ? 'medium' : 'regular'}
                      >
                        {option.label}
                      </Text>
                    </StyledOption>
                  ))}
                </ScrollView>
              </StyledMenu>
            </Pressable>
          </StyledOverlay>
        </Pressable>
      </Modal>
    </>
  );
}
