import axios from 'axios';

const API_KEY = import.meta.env.VITE_MOVIEDB_APIKEY
const API_URL = import.meta.env.VITE_MOVIEDB_API_URL



export const getMovies = async (page?: number) => {
    try {
        const response = await axios({
            method:'GET',
            url:`${API_URL}/movie/popular`,
            params:{
                api_key:API_KEY,
                page:page,
                language:'es-AR'
            }
        })    
        return response.data
        
    } catch (error: any) {
        return {error: error.message}
    }

}

export const getMovie = async (id?: string) => {
    try {
        const response = await axios({
            method:'GET',
            url:`${API_URL}/movie/${id}`,
            params:{
                api_key:API_KEY,
                language:'es-AR'
            }
        })
        return response.data
    } catch (error: any) {

        return {error: "Ocurrió un error al obtener la pelicula."}
    }
}

export const searchMovies = async (query: string, page?: number) => {
    try {
        const response = await axios({
            method:'GET',
            url:`${API_URL}/search/movie`,
            params:{
                api_key:API_KEY,
                query:query,
                page:page,
                language:'es-AR'
            }
        })
        return response.data
    } catch (error: any) {
        return {error: "Ocurrió un error al buscar la pelicula."}
    }
}