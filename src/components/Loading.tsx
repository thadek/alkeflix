import { Backdrop, CircularProgress } from '@mui/material';

type Props = {
    open: boolean
}

export default function Loading(props:Props): JSX.Element {
    return (
        <Backdrop open={true} sx={{ color: '#fff', background:'black', minHeight:'100vh' }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}