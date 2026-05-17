import { borderRadius } from './borderRadius';
import { colors, type ThemeColors } from './colors';
import { fontFamily } from './fontFamily';
import { fontSize } from './fontSize';
import { spacing } from './spacing';

const createTheme = (themeColors: ThemeColors) => ({
  colors: colors(themeColors),
  fontSize: fontSize(),
  spacing: spacing(),
  fontFamily: fontFamily(),
  borderRadius: borderRadius(),
});

export type { BorderRadius, BorderRadiusToken } from './borderRadius';
export { borderRadius } from './borderRadius';
export type { Colors, ColorToken, ThemeColors } from './colors';
export { colors } from './colors';
export type { FontFamily, FontFamilyToken } from './fontFamily';
export { fontFamily } from './fontFamily';
export type { FontSize, FontSizeToken } from './fontSize';
export { fontSize } from './fontSize';
export type { AlignToken, JustifyToken } from './layout';
export type { PaddingProps, ResolvedPadding } from './padding';
export { getPadding } from './padding';
export type { Spacing, SpacingToken } from './spacing';
export { spacing } from './spacing';
export { createTheme };
