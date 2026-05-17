const fontFamily = () => ({
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
});

export type FontFamily = ReturnType<typeof fontFamily>;
export type FontFamilyToken = keyof FontFamily;
export { fontFamily };
