import {Alert, Grid} from '@mui/material'



export default function Disclaimer(): JSX.Element {
    return ( 
            <Alert severity="error" sx={{fontFamily:'Roboto'}}>
                DISCLAIMER: Alkeflix es un proyecto de carácter educativo y no guarda relación con Netflix. UTILICE LAS CREDENCIALES DE DEMOSTRACIÓN PROVISTAS. NO INGRESE INFORMACIÓN SENSIBLE.
                </Alert> 
   
    );
}