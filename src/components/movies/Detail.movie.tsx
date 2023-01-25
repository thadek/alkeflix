import { Grid, Typography} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../../services/movies.service'
import Loading from '../Loading';
 

export default function DetailMovie(props: any): JSX.Element {

    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getMovie(id)
            .then((movie) => {
                setIsLoading(false);
                if (movie.error) {
                    setError(true);
                } else {
                    setMovie(movie)
                }

            })
    }, [id]);

    const img_url = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    const img_url_poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    const date = new Date(movie.release_date)


    if (isLoading) {
        return <Loading open />
    }

    if (error) {
        return <Grid container spacing={0} sx={{ background: '#000', minHeight: '100vh' }}>
            <Grid item sm={12} xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ color: '#fff' }}>Ocurrió un error al cargar la película.</Typography>
            </Grid>
        </Grid>
    }

    return (
        <Grid container spacing={0} sx={{ background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(53,34,198,0.47102591036414565) 100%),url(${img_url}),black`, minHeight: '100vh' }}>

            <>


                {/*Divido en 2 la vista */}


                <Grid item sm={12} xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex',  padding: '6em' }}>
                    <Grid item sm={6} xs={12} md={6} lg={4} xl={3.5}>
                        {/*Poster */}

                        <img src={img_url_poster} alt="poster" style={{height:'100%', width:"100%", borderRadius:'1.5%'}} />
                        
                    </Grid>


                    <Grid item sm={9} xs={9} md={9} lg={12} xl={9}>



                        <Grid item sm={8} xs={12} md={12} lg={12} xl={12} sx={{ paddingLeft: '4em' }}>
                            <Typography variant="h1" sx={{ color: '#fff', fontFamily: 'Bebas', lineHeight:'0.9'}}>{movie.title} {"(" + date.getFullYear() + ")"}</Typography>
                            <Typography variant="h5" sx={{ color: '#fff', fontStyle:'italic'}}>{movie.tagline}</Typography>
                            <Typography variant="body1" sx={{ color: '#fff' }}>   {movie.genres?.map((genre: any, index: number) => {
                               return index === movie.genres.length - 1 ? genre.name : genre.name + ", "
                            })}
                            </Typography> 
                            <Typography variant="h5" sx={{ color: '#fff' }}>{movie.runtime} minutos</Typography>

                            <Grid container spacing={5} sx={{ marginTop:'1em',justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

                                <Grid item sm={12} xs={12} md={12} xl={12} sx={{ justifyContent: 'left', alignItems: 'left' }}>
                                    <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Bebas' }}>Sinopsis</Typography>
                                    <Typography variant="body1" sx={{ color: '#fff' }}> {movie.overview}</Typography>
                                </Grid>


                                <Grid item sm={6} xs={6} md={6} xl={6} sx={{ justifyContent: 'left', alignItems: 'left' }}>
                                    <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Bebas' }}>Lanzamiento</Typography>
                                    <Typography variant="h4" sx={{ color: '#fff' }}> {movie.release_date}</Typography>
                                </Grid>


                                <Grid item sm={6} xs={6} md={6} xl={6} sx={{ justifyContent: 'right', alignItems: 'right' }}>
                                    <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Bebas' }}>Puntuación</Typography>
                                    <Typography variant="h6" sx={{ color: '#fff' }}>{Math.round(movie.vote_average)}</Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>





            </>
        </Grid>


    )

}
