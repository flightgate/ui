const fontFamily = () => {
  return {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
  };
};

export type FontFamily = ReturnType<typeof fontFamily>;
export type FontFamilyKey = keyof FontFamily;
export { fontFamily };
