import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";

function Layout() {
    return (
        <BrowserRouter>
            <main>
                <CustomRoutes />
            </main>
        </BrowserRouter>
    )
}

export default Layout;