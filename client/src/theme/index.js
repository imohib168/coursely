import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    primary: { main: '#424242' },
    secondary: { main: '#9e9e9e' },
    white: { main: '#eeeeee' },
    black: { main: '#202020' },
  },

  typography: {
    fontSize: 12,
    fontFamily: "'Poppins', 'sans-serif', 'Nunito Sans'",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          backgroundColor: '#eeeeee',
        },
      },
    },
  },
});
