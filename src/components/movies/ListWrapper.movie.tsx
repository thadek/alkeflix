import { Grid } from '@mui/material';

export default function MoviesListWrapper ({ children, }: { children: JSX.Element }): JSX.Element {

return (
    <Grid container spacing={0} sx={{ background: '#000',minHeight:'100vh', justifyContent: 'center', gap: '2.5em', padding: '2.5em' }}>
        {children}
    </Grid>
)

}