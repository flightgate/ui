const spacing = () => {
  return {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  };
};

export type Spacing = ReturnType<typeof spacing>;
export type SpacingKey = keyof Spacing;
export { spacing };
