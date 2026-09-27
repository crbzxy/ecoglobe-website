import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

const colorPrimary = "#004AAD";
const colorPrimaryDark = "#02247D";
const colorPrimaryLight = "#004EAD";
const colorAccent = "#2BD600";
const colorAccentDark = "#24B800";
const colorText = "#17191C";
const colorMuted = "#444444";
const colorPaper = "#FFFFFF";
const colorSecondaryBg = "#EFF4FA";
const colorBorder = "#E4E9F0";
const fontDisplay = '"Space Grotesk", sans-serif';
const fontBody = '"Inter", sans-serif';

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
      dark: colorPrimaryDark,
      light: colorPrimaryLight,
      contrastText: colorPaper
    },
    secondary: {
      main: colorSecondaryBg,
      dark: colorBorder,
      contrastText: colorText
    },
    accent: {
      main: colorAccent,
      dark: colorAccentDark,
      contrastText: colorPaper
    },
    success: {
      main: colorAccent,
      contrastText: colorPaper
    },
    text: {
      primary: colorText,
      secondary: colorMuted
    },
    background: {
      default: colorPaper,
      paper: colorPaper
    },
    divider: colorBorder
  },
  typography: {
    fontFamily: fontBody,
    h1: {
      fontFamily: fontDisplay,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
      lineHeight: 1.15,
      overflowWrap: "break-word"
    },
    h2: {
      fontFamily: fontDisplay,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      lineHeight: 1.2,
      overflowWrap: "break-word"
    },
    h3: {
      fontFamily: fontDisplay,
      fontWeight: 700,
      overflowWrap: "break-word",
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
      lineHeight: 1.2
    },
    h4: { fontFamily: fontDisplay, fontWeight: 700, overflowWrap: "break-word" },
    h5: {
      fontFamily: fontDisplay,
      fontWeight: 600,
      overflowWrap: "break-word",
      fontSize: "clamp(1.05rem, 2.4vw, 1.35rem)",
      lineHeight: 1.3
    },
    h6: { fontFamily: fontDisplay, fontWeight: 600 },
    button: { fontFamily: fontBody, fontWeight: 700, textTransform: "none" }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
          [theme.breakpoints.down("md")]: {
            width: "100%",
            maxWidth: "100%",
            display: "flex",
            alignSelf: "stretch",
            flexBasis: "100%",
            boxSizing: "border-box"
          }
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", overflowX: "hidden" },
        body: { margin: 0, overflowX: "hidden" },
        a: { textDecoration: "none", color: "inherit" }
      }
    }
  }
});
