import { Outlet, createBrowserRouter } from "react-router-dom";

import { CitySearch } from "../pages/CitySearch";
import { Search } from "../pages/Search";
import { LocalPage } from "../pages/LocalPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <CitySearch />,
      },
      {
        path: "/city/:id",
        element: <Search />,
      },
      {
        path: '/city/:id/local/:localId',
        element: <LocalPage />,
      },
    ],
  },
]);
