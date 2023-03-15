import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound/NotFound";
import Home from "views/pages/Home";

import MovieIndex from "@/views/pages/Movie/Index/MovieIndex";
import MovieShow from "@/views/pages/Movie/Show/MovieShow";
import DiscoverIndex from "@/views/pages/Discover/Index/DiscoverIndex";
import PeopleIndex from "@/views/pages/People/Index/PeopleIndex";
import PeopleShow from "@/views/pages/People/Show/PeopleShow";

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
        },
        {
            path: "/people",
            element: <PeopleIndex />
        },
        {
            path: "/people/:id",
            element: <PeopleShow />
        },
        {
            path: "/discover",
            element: <DiscoverIndex />
        },
    ]);

    return routes;
}

export default CustomRoutes;