import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import useSearchMovie from "../../hooks/useSearchMovie";
import MoviesListWrapper from "./ListWrapper.movie";
import ListMovies from "./List.movie";
import { Typography, Grid } from "@mui/material";

export default function SearchMovie(): JSX.Element {

    const [params,setParams] = useSearchParams();

    const query = params.get('q') || '';

    const [pageNumber, setPageNumber] = useState<number>(1);

    const movieProps = useSearchMovie(query, pageNumber);

    return (<MoviesListWrapper>
        <>
            <Grid item sm={12} xs={12} md={12} lg={12} xl={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                <Typography variant="h4" component="h4" sx={{ color: '#fff' }}>
                    Resultados de la búsqueda para: {query}
                </Typography>
            </Grid>
            {query && 
                <ListMovies {...movieProps} setPageNumber={setPageNumber} />
            }
            
        </>
    </MoviesListWrapper> 

    )  

  

    





}