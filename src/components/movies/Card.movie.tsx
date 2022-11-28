import { Card, CardMedia, CardActionArea, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    poster_path: string,
    id: number,
    release_date: string
}

export default function CardMovie(props: Props): JSX.Element {

    const { poster_path: cardImage } = props;
    const img_url = `${import.meta.env.VITE_MOVIEDB_API_IMAGE_URL}/${cardImage}`
    const ruta = `/movie/${props.id}`

    const styles = {


        "&:hover": {
            transform: "scale(1.02)",
            transition: "0.5s",

        }
    }


    return (
        <Grid item sm={2} xs={12} md={2} lg={2} xl={2} sx={styles}>



            <Card><Link to={ruta}>
                <CardActionArea>

                    <CardMedia component="img" height="100%" image={img_url} />
                </CardActionArea></Link>
            </Card>
        </Grid >

    );
}