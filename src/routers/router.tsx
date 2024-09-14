import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import MoviePage from "../pages/MoviePage";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "movie/:id", element: <MoviePage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
