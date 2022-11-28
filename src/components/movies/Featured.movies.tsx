import useMovieList from "../../hooks/useMovieList";
import { useState } from "react";
import MoviesListWrapper from "./ListWrapper.movie";
import ListMovies from "./List.movie";
import { Typography, Grid } from "@mui/material";
export default function FeaturedMovies() {

    const [pageNumber, setPageNumber] = useState<number>(1)
    const movieProps = useMovieList(pageNumber);

    return (
        <MoviesListWrapper>
            <>
                <Grid item sm={12} xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                    <Typography variant="h3" component="h3" sx={{ color: '#fff' }}>
                        Lo más destacado
                    </Typography>
                </Grid>
                <ListMovies {...movieProps} setPageNumber={setPageNumber} />
            </>
        </MoviesListWrapper>
    )

}