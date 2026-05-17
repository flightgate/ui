import { type ReactNode, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPadding, type PaddingProps } from 'src/theme';
import { useTheme } from 'styled-components/native';

export interface SafeAreaProps extends PaddingProps {
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  isKeyboardAvoidingView?: boolean;
  children?: ReactNode;
}

export function SafeArea({
  children,
  edges = ['top', 'bottom', 'left', 'right'],
  isKeyboardAvoidingView = false,
  ...paddingProps
}: SafeAreaProps) {
  const theme = useTheme();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Android: KeyboardAvoidingView with behavior="padding" does not work reliably.
  // We use a manual listener to add paddingBottom equivalent to the keyboard height.
  useEffect(() => {
    if (!isKeyboardAvoidingView || Platform.OS !== 'android') return;

    const showSub = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
      setIsKeyboardOpen(true);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
      setIsKeyboardOpen(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [isKeyboardAvoidingView]);

  const resolvedPadding = getPadding(theme, paddingProps);
  const extraBottom =
    isKeyboardAvoidingView && isKeyboardOpen && Platform.OS === 'android' ? keyboardHeight : 0;

  return (
    <SafeAreaView
      edges={edges}
      style={[{ flex: 1 }, resolvedPadding, extraBottom > 0 && { paddingBottom: extraBottom }]}
    >
      {children}
    </SafeAreaView>
  );
}
