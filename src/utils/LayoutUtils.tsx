import { useState } from "react";
import BenefitsBar from "../layouts/BenefitsBar";
import Header from "../layouts/Header";
import Topbar from "../layouts/Topbar";
import LoginModal from "../modals/LoginModal";
import { Outlet } from "react-router-dom";

const LayoutUtils = () => {

    const [modalLogin, setModalLogin] = useState<boolean>(false);

    const handleShowLogin = () => {
        setModalLogin(true);
    }
    const handleCloseLogin = () => {
        setModalLogin(false);
    }

    return (
        <div className="wrapper-page">
            <Topbar />
            <Header handleShowLogin={handleShowLogin} />
            {modalLogin && <LoginModal handleClose={handleCloseLogin} />}
            <BenefitsBar />

            <Outlet />
        </div>
    )
}

export default LayoutUtils;