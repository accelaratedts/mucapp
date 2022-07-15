import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#ff784e',
            main: '#ff5722',
        },
        secondary: {
            light: '#33bfff',
            main: '#5393ff',
        },
        custom: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        }
    },
});
