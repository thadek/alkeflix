import { createTheme } from "@mui/material/styles";


declare module '@mui/material/styles'{
    interface PaletteOptions {
        white: PaletteOptions['primary'];
      }
}

export const theme = createTheme({
    palette: {
        mode:'dark',
        white: {
            main: "#ffffff"
        }
    },

});