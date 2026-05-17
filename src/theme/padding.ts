import type { DefaultTheme } from 'styled-components/native';
import type { SpacingToken } from './spacing';

interface PaddingProps {
  padding?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingVertical?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
}

interface ResolvedPadding {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const getPadding = (theme: DefaultTheme, props: PaddingProps): ResolvedPadding => {
  const px = (token?: SpacingToken) => (token ? theme.spacing[token] : undefined);

  const base = px(props.padding);
  const vertical = px(props.paddingVertical) ?? base;
  const horizontal = px(props.paddingHorizontal) ?? base;

  return {
    paddingTop: px(props.paddingTop) ?? vertical,
    paddingBottom: px(props.paddingBottom) ?? vertical,
    paddingLeft: px(props.paddingLeft) ?? horizontal,
    paddingRight: px(props.paddingRight) ?? horizontal,
  };
};

export { getPadding, type PaddingProps, type ResolvedPadding };
