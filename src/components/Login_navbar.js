import React from "react";
import login_styles from "../static/css/login.module.css";
function Login_navbar() {
    return (
        <>
            <div className={login_styles.aco}>
                <img className={login_styles.aco_image} src="images/aco.png" />
            </div>
            <h4 className={login_styles.nav_title}>동국 경영 학점 도우미</h4>
        </>
    );
}

export default Login_navbar;
