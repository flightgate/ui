import { useEffect, useRef, useState } from 'react';
import { Animated, type LayoutChangeEvent } from 'react-native';
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

const StyledGroup = styled.View<{ $gap: number }>`
  gap: ${({ $gap }) => $gap}px;
`;

interface SkeletonBlockProps {
  width?: number | `${number}%`;
  height?: number;
  borderRadius?: number;
}

function SkeletonBlock({ width = '100%', height = 16, borderRadius = 8 }: SkeletonBlockProps) {
  const theme = useTheme();
  const shimmer = useRef(new Animated.Value(0)).current;
  const [blockWidth, setBlockWidth] = useState(0);

  useEffect(() => {
    if (blockWidth === 0) return;

    Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();

    return () => shimmer.stopAnimation();
  }, [shimmer, blockWidth]);

  const translateX = shimmer.interpolate({
    inputRange: [0, 1],
    // Usamos valores absolutos em pixels — native driver não suporta strings '%'
    outputRange: [-blockWidth, blockWidth * 2],
  });

  const handleLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    if (w > 0 && w !== blockWidth) {
      setBlockWidth(w);
    }
  };

  return (
    <StyledBlock $width={width} $height={height} $radius={borderRadius} onLayout={handleLayout}>
      {blockWidth > 0 && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '60%',
            // Usa a cor branca do tema para o shimmer — funciona sobre bgSecondary claro
            backgroundColor: `${theme.colors.white}59`, // 35% opacity
            transform: [{ translateX }],
          }}
        />
      )}
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
