// STYLES
import Default from "./Default";
import TextStyles from "./TextStyle";
import { Breakpoints } from "./Breackpoints";

const GlobalStyles = {
  html: {
    fontSize:TextStyles.paragraph ,
    lineHeight: "1.5",
    backgroundColor: "#000",
  },

  // BREAKPOINTS
  ...Breakpoints,

  // TEXT STYLES
  ...TextStyles
}

export default GlobalStyles;