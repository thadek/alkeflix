import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
   <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </AuthProvider>
 
)
