interface ThemeColors {
  primary: string;
  secondary?: string;
  tertiary?: string;
}

const colors = (input: ThemeColors) => {
  return {
    primary: input.primary,
    secondary: input.secondary ?? 'transparent',
    tertiary: input.tertiary ?? 'transparent',

    white: '#FFFFFF',
    black: '#000000',
    danger: '#E91616',
    warning: '#FFC700',
    success: '#00D37B',
    info: '#2E5BFF',
    transparent: 'transparent',

    bgPrimary: '#F4F6FC',
    bgSecondary: '#8097B1',
    bgTertiary: '#28292B',

    borderPrimary: '#EEF2FF',
    borderSecondary: '#E0F2FF',

    textPrimary: '#28292B',
    textSecondary: '#8097B1',
    textTertiary: '#C3C9DC',
  };
};

export type Colors = ReturnType<typeof colors>;
export type ColorKey = keyof Colors;
export type { ThemeColors };
export { colors };
