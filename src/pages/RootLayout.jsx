import { Outlet } from "react-router-dom"
import TopMenu from "../components/TopMenu"
import Footer from "../components/Footer"

function RootLayout() {
    return (
        <>
            <TopMenu />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout