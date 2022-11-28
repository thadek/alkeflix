import { lazy, useRef, useCallback } from "react";
import CardMovie from "../movies/Card.movie";

import { Grid, CircularProgress } from "@mui/material";

type Props = {
    movies: any;
    isLoading: boolean;
    error?: any;
    hasMore: boolean;
    setPageNumber: any;
}

export default function ListMovies(props: Props): JSX.Element {


    const { movies, isLoading, error, hasMore, setPageNumber } = props;

    const observer = useRef<IntersectionObserver>();


    // Callback que se ejecuta cuando el elemento observado entra en el viewport
    const lastMovieElementRef = useCallback((node: any) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber((prevPage:any) => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);



    return (
        <>
            {movies.map((movie: any, index: number) => {
                if (movies.length === index + 1) {

                    if (!movie.poster_path){
                        return;
                    }
                    return <><div ref={lastMovieElementRef} key={movie.id} />
                        <CardMovie {...movie} />
                    </>

                } else {

                    if(movie.poster_path){
                        return <CardMovie {...movie} key={movie.id}/>
                    }else{
                        return <></>
                    }

                    
                }

            })}
            {isLoading &&

                <Grid item sm={12} xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Grid>
            }

            {error && <div>{error}</div>}
        </>
    )


}

