import { useState, useContext, createContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_ALKEMY_API_URL;

interface IAuthContext {
    token: string | null;
    signin(email: string, password: string): any;
    signout(): void;
    isAuthenticated: boolean;
    isLoading?:boolean;
}


//Inicializo un objeto de tipo AuthContext
const AuthContextDefaultValues:IAuthContext = {
    token: null,
    signin: () => {},
    signout: () => {},
    isAuthenticated: false,
    isLoading:false
}

//Creo el contexto con valores por defecto
const AuthContext = createContext<IAuthContext>(AuthContextDefaultValues);

export const useAuth = () => {
    return useContext(AuthContext);
}


function useProvideAuth() {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    const signin = async (email: string, password: string) => {
        try {
          
          
          /*  const api_call = await axios.post(API_URL, { email, password })
            if(api_call.status === 200){
                setToken(api_call.data.token);
                sessionStorage.setItem("token", api_call.data.token);
            }*/


            //Simulo el login con un token fijo, PORQUE LA GENTE DE ALKEMY NO PONE HTTPS EN SU API
            if(email === "challenge@alkemy.org" && password === "react"){
                const sim_token = import.meta.env.VITE_SIM_TOKEN;
                setToken(sim_token)
                sessionStorage.setItem("token", sim_token)
            }

            return {status: 200, message: "Bienvenido!"}
        } catch (err:any) {
            
            return {status: err.response.status, message: "Error al iniciar sesión."}

        }

       


        
    }


    const signout = () => {
        setToken(null);
        sessionStorage.removeItem('token');
    }

    useEffect(() => {
        const token1 = sessionStorage.getItem('token');
        if (token1) {
            setToken(token1);
            setLoading(false);
        }
        else{
            setLoading(false);
        }
    }, [token]);

    const isAuthenticated =  token? true : false;
    

    const returnValues:IAuthContext = {
        token, signin, signout, isAuthenticated, isLoading
    }

    return returnValues;
}


export function AuthProvider({ children }: { children: ReactNode }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>
}



