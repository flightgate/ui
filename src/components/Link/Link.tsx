import { Text } from 'src/components';
import type { FontSizeToken } from 'src/theme';
import styled from 'styled-components/native';

export interface LinkProps {
  children: string;
  size?: FontSizeToken;
  onPress: () => void;
}

const StyledLink = styled.TouchableOpacity`
  align-self: flex-start;
`;

export function Link({ children, size = 'md', onPress }: LinkProps) {
  return (
    <StyledLink onPress={onPress}>
      <Text size={size} color="primary">
        {children}
      </Text>
    </StyledLink>
  );
}
