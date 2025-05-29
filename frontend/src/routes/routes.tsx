import { Outlet, createBrowserRouter } from "react-router-dom";

import { CitySearch } from "../pages/CitySearch";
import { Search } from "../pages/Search";

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
        path: "/pesquisar",
        element: <Search />,
      },
    ],
  },
]);
