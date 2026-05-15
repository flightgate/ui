import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import type { SpacingKey } from '../../theme';

export type SkeletonVariant = 'text' | 'circle' | 'rect';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: number | `${number}%`;
  height?: number;
  borderRadius?: number;
  lines?: number;
  gap?: SpacingKey;
}

const StyledBlock = styled.View<{ $width: number | string; $height: number; $radius: number }>`
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $radius }) => $radius}px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  overflow: hidden;
`;

const StyledShimmer = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.45);
`;

const StyledGroup = styled.View<{ $gap: number }>`
  gap: ${({ $gap }) => $gap}px;
`;

function SkeletonBlock({
  width = '100%',
  height = 16,
  borderRadius = 8,
}: Pick<SkeletonProps, 'width' | 'height' | 'borderRadius'> & { key?: string }) {
  const shimmer = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmer, {
        toValue: 2,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();
  }, [shimmer]);

  const translateX = shimmer.interpolate({
    inputRange: [-1, 2],
    outputRange: ['-100%' as unknown as number, '200%' as unknown as number],
  });

  return (
    <StyledBlock $width={width} $height={height} $radius={borderRadius}>
      <StyledShimmer style={{ transform: [{ translateX }] }} />
    </StyledBlock>
  );
}

export function Skeleton({
  variant = 'rect',
  width,
  height,
  borderRadius,
  lines = 1,
  gap = 'xs',
}: SkeletonProps) {
  const theme = useTheme();
  const resolvedHeight = height ?? (variant === 'text' ? 14 : variant === 'circle' ? 40 : 80);
  const resolvedWidth = width ?? (variant === 'circle' ? resolvedHeight : '100%');
  const resolvedRadius =
    borderRadius ?? (variant === 'circle' ? resolvedHeight / 2 : variant === 'text' ? 4 : 8);

  if (lines > 1) {
    return (
      <StyledGroup $gap={theme.spacing[gap]}>
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBlock
            key={i.toString()}
            width={i === lines - 1 ? '60%' : resolvedWidth}
            height={resolvedHeight}
            borderRadius={resolvedRadius}
          />
        ))}
      </StyledGroup>
    );
  }

  return (
    <SkeletonBlock width={resolvedWidth} height={resolvedHeight} borderRadius={resolvedRadius} />
  );
}
