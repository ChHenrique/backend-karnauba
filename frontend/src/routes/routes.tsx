import { Outlet, createBrowserRouter } from "react-router-dom";

import { CitySearch } from "../pages/CitySearch";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Outlet/>,
        children: [
            {
             path: '/pesquisar-cidades',
             element: <CitySearch/>
            }
        ]
    }
])