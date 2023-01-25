import { Suspense, lazy } from "react";
import Login from "./components/login/Login"
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { useAuth } from "./hooks/useAuth";
import RequireAuth from "./components/security/RequireAuth";
import DetailMovie from "./components/movies/Detail.movie";
import { AnimationLayout } from "./components/AnimationLayout";
import { AnimatePresence } from "framer-motion"
import Loading from "./components/Loading";
import FeaturedMovies from "./components/movies/Featured.movies";
import SearchMovie from "./components/movies/Search.movie";
import './index.css'


function App() {

  const { isAuthenticated } = useAuth();

  const location = useLocation();
  return (
    <>

      <ThemeProvider theme={theme}>
        <SnackbarProvider anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }} preventDuplicate >
          {isAuthenticated && <Header />}
          <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>

              <Route element={<AnimationLayout />}>
                <Route path="/" element={isAuthenticated ? <FeaturedMovies/> : <Login />} />
                <Route path="/listado" element={<Suspense fallback={<Loading open/>}><RequireAuth><FeaturedMovies/></RequireAuth></Suspense>} />
                <Route path="/movie/:id" element={<RequireAuth><DetailMovie/></RequireAuth>} />
                <Route path="/search" element={<RequireAuth><SearchMovie/></RequireAuth>} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
              </Route>
            </Routes>
            <Footer />
          </AnimatePresence>
        </SnackbarProvider>
      </ThemeProvider>


    </>
  )
}

export default App
