import {Typography, Grid} from '@mui/material'

export default function Footer(): JSX.Element {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{color:'#fff',position:'fixed',bottom:'0',right:'0', backgroundColor:'#00000096'}}>
            <Typography sx={{fontFamily:'Bebas'}}>© 2022 Alkemy React Challenge 
                </Typography> 
               <a target="_blank"  href={'https://github.com/thadek'} style={{textDecoration:'none'}}> 
               <Typography sx={{color:'#fff', marginLeft:'.1em', fontFamily:'Bebas'}}>| by Thadek
                </Typography></a>
        </Grid>
    );
}