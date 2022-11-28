import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Grid, IconButton, Typography, TextField, Button, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from '../Logo';
import { useAuth } from '../../hooks/useAuth';

//Agrego la posibilidad de usar el color blanco en el botón de cerrar el snackbar, sobreescribiendo la interface de color del iconButton.
declare module '@mui/material' {
    interface IconButtonPropsColorOverrides {
        white: true;
    }
    interface ButtonPropsColorOverrides {
        white: true;
    }
}




function Login(): JSX.Element {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));


    const { signin } = useAuth(); 

    const navigate = useNavigate();

    // barra notificacion
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = (snackbarId: any) => (
        <IconButton color="white" onClick={() => { closeSnackbar(snackbarId) }}>
            <CloseIcon />
        </IconButton>
    );

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault() // Prevents the page from reloading
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        //Validacion
        if (email === "" || password === "") {
            enqueueSnackbar("Por favor complete todos los campos", { variant: "error", action });
            return;
        }
        //Validacion campo mail con expresión regular.
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email !== "" && !regexEmail.test(email)) {
            enqueueSnackbar("El email no es valido", { variant: "error", action });
            return;
        }





        if (email != "challenge@alkemy.org" || password != "react") {
            enqueueSnackbar("Usuario o contraseña incorrectos", { variant: "error", action })
            return;
        }

        signin(email, password).then((response: any) => {
            if (response.status === 200) {
                enqueueSnackbar(response.message, { variant: "success", action });
                navigate('/listado');
            } else {
                enqueueSnackbar(response.message, { variant: "error", action });
            }
        });

    }

    return (

        <Grid container component={'main'} sx={{ background: 'url(./img/bg.jpg)', backgroundSize: 'cover', minHeight: '100vh', gridTemplateRows: '1fr 2fr 1fr' }} >

            <Grid item xs={false} sm={false} md={12} lg={12} >{isMobile? <Logo style={{width:'18%', height:'4%',padding:'1em', marginLeft:'1.5vw'}} /> : <Logo style={{marginLeft:'1em',top:'1em'}}/>}</Grid>


            <Grid item md={12} sm={12} xs={12} sx={{ flexDirection: 'row', display: 'flex' }}>
                <Grid item xs={0} sm={0} md={2} lg={4}>

                </Grid>
                <Grid item xs sm={12} md={8} lg={4}sx={{ display: 'flex', gap: '2em', flexDirection: 'column', alignItems: 'center', background: '#000000b0', color: '#fff', p: 3 }}>


                    <Typography variant="h4" sx={{ fontSize: '2.5em', marginTop: '1em' }}>Iniciar sesión</Typography>
                    <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '1em', minWidth: '20em', padding: '3em' }}>
                        <TextField
                            id="email"
                            label="Email"
                            variant="filled"
                        />



                        <TextField
                            id="password"
                            label="Password"
                            variant="filled"
                            type="password"
                        />

                        <Button color={'error'} variant={'outlined'} type="submit">Ingresar</Button>
                    </form>
                </Grid>

                <Grid item xs={false} sm={false} md={2} lg={4}>

                </Grid>
            </Grid>


            <Grid item xs={false} md={12} sx={{ display: 'flex' }}></Grid>

        </Grid >



    )
}

export default Login;