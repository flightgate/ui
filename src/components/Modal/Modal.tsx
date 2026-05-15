import { forwardRef, type ReactNode } from 'react';
import { Modalize } from 'react-native-modalize';
import styled, { useTheme } from 'styled-components/native';
import { Text } from '../Text';

export interface ModalProps {
  title?: string;
  children?: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

const StyledContent = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  flex: 1;
`;

export const Modal = forwardRef<Modalize, ModalProps>(
  ({ title, children, onOpen, onClose }, ref) => {
    const theme = useTheme();

    return (
      <Modalize
        ref={ref}
        alwaysOpen={undefined}
        modalHeight={undefined}
        onOpen={onOpen}
        onClose={onClose}
        adjustToContentHeight={false}
        modalStyle={{ backgroundColor: theme.colors.bgPrimary, flex: 1 }}
        handleStyle={{ backgroundColor: theme.colors.bgSecondary }}
      >
        {title && (
          <StyledHeader>
            <Text size="lg" weight="semibold">
              {title}
            </Text>
          </StyledHeader>
        )}
        <StyledContent>{children}</StyledContent>
      </Modalize>
    );
  },
);

Modal.displayName = 'Modal';
