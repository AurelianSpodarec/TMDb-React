import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";

function Layout() {
    return (
        <BrowserRouter>

            <Header />
                <main>
                    <CustomRoutes />
                </main>
            <Footer />

        </BrowserRouter>
    )
}

export default Layout;