import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

/**
 * Esta funcion es un componente que se encarga de verificar si el usuario esta autenticado
 * @param props
 * @returns JSX.Element
 */
export default function RequireAuth({ children }: { children: JSX.Element }) {
    const { isAuthenticated, isLoading } = useAuth();
    if (!isLoading && !isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <>{children}</>;
}