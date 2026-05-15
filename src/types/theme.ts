import 'styled-components/native';
import type { BorderRadius, Colors, FontFamily, FontSize, Spacing } from '../theme';

export interface Theme {
  colors: Colors;
  fontSize: FontSize;
  spacing: Spacing;
  fontFamily: FontFamily;
  borderRadius: BorderRadius;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
