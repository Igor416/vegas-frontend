import { createTheme, PaletteOptions as MUIPaletteOptions, Palette as MUIPalette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: MUIPalette['primary'];
    milk: MUIPalette['primary'];
  }

  interface PaletteOptions {
    tertiary?: MUIPaletteOptions['primary'];
    milk?: MUIPaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    milk: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#81d5ff',
      main: '#00aaff',
      dark: '#0b77c7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a6d79c',
      main: '#4cb034',
      dark: '#2a7e15',
      contrastText: '#fff',
    },
    tertiary: {
      light: '#81cbce',
      main: '#009696',
      dark: '#066967',
      contrastText: '#fff',
    },
    milk: {
      light: '#e9f2f7',
      main: '#e9f2f7',
      dark: '#668d9c',
      contrastText: '#000',
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    button: {
      textTransform: 'none'
    },
    h6: {
      fontWeight: 400
    }
  },
});

export default theme;