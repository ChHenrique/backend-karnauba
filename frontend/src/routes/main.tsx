import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/global.css'
import "leaflet/dist/leaflet.css";


import { routes } from './routes';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
