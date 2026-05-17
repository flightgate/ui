import { type ReactNode, useMemo } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeArea } from 'src/components';
import {
  type AlignToken,
  type ColorToken,
  getPadding,
  type JustifyToken,
  type PaddingProps,
} from 'src/theme';
import { useTheme } from 'styled-components/native';

export interface LayoutProps extends PaddingProps {
  children?: ReactNode;
  bg?: ColorToken;
  justifyContent?: JustifyToken;
  alignItems?: AlignToken;
  isSafeArea?: boolean;
  ignoreTopSafeArea?: boolean;
  ignoreBottomSafeArea?: boolean;
  isKeyboardAvoidingView?: boolean;
}

export function Layout({
  children,
  bg = 'bgPrimary',
  justifyContent,
  alignItems,
  isSafeArea = true,
  ignoreTopSafeArea = false,
  ignoreBottomSafeArea = false,
  isKeyboardAvoidingView = false,
  ...paddingProps
}: LayoutProps) {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  const edges = useMemo(() => {
    const result: ('top' | 'bottom' | 'left' | 'right')[] = ['left', 'right'];

    if (!ignoreTopSafeArea) result.push('top');

    if (!ignoreBottomSafeArea) result.push('bottom');

    return result;
  }, [ignoreTopSafeArea, ignoreBottomSafeArea]);

  const resolvedPadding = getPadding(theme, paddingProps);

  const content = (
    <View
      style={[
        { flex: 1, backgroundColor: theme.colors[bg], justifyContent, alignItems },
        resolvedPadding,
      ]}
    >
      {isSafeArea ? (
        <SafeArea edges={edges} isKeyboardAvoidingView={isKeyboardAvoidingView}>
          {children}
        </SafeArea>
      ) : (
        children
      )}
    </View>
  );

  if (isKeyboardAvoidingView) {
    const isIos = Platform.OS === 'ios';
    return (
      <KeyboardAvoidingView
        enabled={isIos}
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={isIos ? bottom * -1 : 0}
        style={{ flex: 1 }}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
}
