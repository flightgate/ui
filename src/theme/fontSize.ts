const fontSize = () => {
  return {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  };
};

export type FontSize = ReturnType<typeof fontSize>;
export type FontSizeToken = keyof FontSize;
export { fontSize };
