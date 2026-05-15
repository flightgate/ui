import { borderRadius } from './borderRadius';
import { colors, type ThemeColors } from './colors';
import { fontFamily } from './fontFamily';
import { fontSize } from './fontSize';
import { spacing } from './spacing';

const createTheme = (themeColors: ThemeColors) => {
  return {
    colors: colors(themeColors),
    fontSize: fontSize(),
    spacing: spacing(),
    fontFamily: fontFamily(),
    borderRadius: borderRadius(),
  };
};

export type { BorderRadius, BorderRadiusKey } from './borderRadius';
export { borderRadius } from './borderRadius';
export type { ColorKey, Colors, ThemeColors } from './colors';
export { colors } from './colors';
export type { FontFamily, FontFamilyKey } from './fontFamily';
export { fontFamily } from './fontFamily';
export type { FontSize, FontSizeKey } from './fontSize';
export { fontSize } from './fontSize';
export type { Spacing, SpacingKey } from './spacing';
export { spacing } from './spacing';
export { createTheme };
