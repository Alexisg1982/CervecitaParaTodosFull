import { Breakpoints } from "./Breackpoints";
import Default from "./Default";
//GlobalsStyles.jsx
const GlobalStyles = {
  html: {
    fontSize:"14px",
    lineHeight: "1.5",
    backgroundColor: "#000",
  },

  // FONTS tipos
  title: {
    fontWeight: 'bold',
    fontSize: Default.h2.fontSize,
    color: Default.danger, 
  },
  subtitle: {
    fontSize: Default.h3,
    lineHeight: "1.3",
    color: "#333",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "10px",
    color: Default.primary
  },
  ...Breakpoints,
}

export default GlobalStyles;