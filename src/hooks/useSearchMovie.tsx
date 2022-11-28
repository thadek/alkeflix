import { useEffect, useState } from 'react'
import  { searchMovies } from '../services/movies.service'

/**
 * Esta funcion se encarga de fetchear los datos de la api con el servicio de movies 
 * y devolverlos en un array de objetos
 * @param query busqueda de pelicula
 * @param pageNumber 
 */
export default function useSearchMovie(query:string, pageNumber: number) {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [movies, setMovies] = useState<any>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);

    useEffect(() => {
        setMovies([])
    }, [query])

    useEffect(() => {
        setLoading(true);
        setError(false);
        searchMovies(query,pageNumber)
            .then((movies) => {
                setMovies((prevMovies: any) => {
                    //Creo un array con los datos anteriores y los nuevos, y uso el spread operator para que no se repitan los datos, ademas de usar Set para que no se repitan los ids.
                    return [...new Set([...prevMovies, ...movies.results])]
                });
                setHasMore(movies.results.length > 0);
                setLoading(false);
            })
            .catch((e) => {
                setError(true);
            });
    }, [pageNumber,query]);

    return {
        isLoading, error, movies, hasMore
    };




}