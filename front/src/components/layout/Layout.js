import React from "react";
import NavBarIntern from "../NavBarIntern.jsx";
import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import Kemi from "../Kemi.jsx";
import { getToken } from "../../utils/localStorage/useToken.js";
import { getRole } from "../../utils/localStorage/useRole.js";
const Layout = ({ children }) => {
    return (
        <div>
            <Kemi />
            {!getToken() && !getRole() && <NavBar />}
            {getToken() && getRole() && <NavBarIntern />}
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;