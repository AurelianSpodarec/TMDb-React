import { useRoutes } from "react-router-dom";

import Home from "views/pages/Home";
import NotFound from "views/pages/NotFound/NotFound";


function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        }
    ]);

    return routes;
}

export default CustomRoutes;