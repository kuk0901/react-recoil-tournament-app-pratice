const darkColors = {
  headerColor: "#371D7C",
  sourceTextColor: "#F5F5F5",
  textColor: "#F5F5F5",
  backgroundColor: "#110926",
  homeButtonColor: "#74F7D6",
  borderColor: "#242222",
  resultImgBorderColor: "#FF9AD6",
  logoColor: "#df1bcb"
};

const lightColors = {
  headerColor: "#FEC207",
  sourceTextColor: "#F5F5F5",
  textColor: "#1F1C1C",
  backgroundColor: "#FFF2CC",
  homeButtonColor: "#7B50FB",
  borderColor: "#F5F5F5",
  resultImgBorderColor: "#E06666",
  logoColor: "#df1bcb"
};

export const lightTheme = {
  colors: lightColors
};

export const darkTheme = {
  colors: darkColors
};

export type Theme = typeof lightTheme | typeof darkTheme;
