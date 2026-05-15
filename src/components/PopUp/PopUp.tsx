import { forwardRef, type ReactNode } from 'react';
import { Modalize } from 'react-native-modalize';
import styled, { useTheme } from 'styled-components/native';
import { Text } from '../Text';

export interface PopUpProps {
  title?: string;
  children?: ReactNode;
  snapPoint?: number;
  onOpen?: () => void;
  onClose?: () => void;
}

const StyledHeader = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.xs}px;
`;

const StyledContent = styled.View`
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.md}px;
`;

export const PopUp = forwardRef<Modalize, PopUpProps>(
  ({ title, children, snapPoint, onOpen, onClose }, ref) => {
    const theme = useTheme();

    return (
      <Modalize
        ref={ref}
        snapPoint={snapPoint}
        onOpen={onOpen}
        onClose={onClose}
        modalStyle={{ backgroundColor: theme.colors.bgPrimary }}
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

PopUp.displayName = 'PopUp';
