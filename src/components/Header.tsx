import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Button, InputBase } from '@mui/material';

import { Logo } from './Logo';
import { useAuth } from "../hooks/useAuth";
import SearchBar from './SearchBar';
import LogoutIcon from '@mui/icons-material/Logout';
import RecentActorsIcon from '@mui/icons-material/RecentActors';


function Header(): JSX.Element {

    const { signout } = useAuth();




    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Link to={'/'}>
                     <Logo relative width={'120px'} height={'35px'} style={{ marginBottom: '1em', marginRight: '1em' }} />
                    </Link>
                    

                    <Grid container >
                    <Button color="inherit"  component={Link} to="/listado"> <RecentActorsIcon/></Button>
                    <SearchBar />
                       
                    </Grid>
                   
                    <Grid container justifyContent="flex-end">
                   
                      
                        <Button color="inherit" onClick={signout} sx={{fontSize:'.6em'}}>Cerrar Sesión <LogoutIcon/></Button>
                    </Grid>

                </Toolbar>
            </AppBar>
        </header>




    );
}

export default Header;