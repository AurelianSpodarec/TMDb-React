import { useRoutes } from "react-router-dom";

import Home from "views/pages/Home";
import NotFound from "views/pages/NotFound/NotFound";

import MovieIndex from "@/views/pages/Movie/Index/MovieIndex";
import MovieShow from "@/views/pages/Movie/Show/MovieShow";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/movies",
            element: <MovieIndex />
        },
        {
            path: "/movies/:id",
            element: <MovieShow />
        }
    ]);

    return routes;
}

export default CustomRoutes;