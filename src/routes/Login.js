import React from "react";
import Login_navbar from "../components/Login_navbar";
import login_styles from "../static/css/login.module.css";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const move_to_signup = () => {
        navigate("/Signup");
    };
    return (
        <div className={login_styles.login_page}>
            <Login_navbar />
            <div className={login_styles.container}>
                <div className={login_styles.input_container}>
                    <div className={login_styles.one_input}>
                        <label for="id" className={login_styles.label}>
                            학번
                        </label>
                        <input type="text" id="id" className={login_styles.input}></input>
                    </div>

                    <div className={login_styles.one_input}>
                        <label for="pw" className={login_styles.label}>
                            비밀번호
                        </label>
                        <input type="text" id="pw" className={login_styles.input}></input>
                    </div>
                </div>
                <button className={login_styles.login_button}>로그인</button>
            </div>
            <button className={login_styles.signup_button} onClick={move_to_signup}>
                회원가입
            </button>
        </div>
    );
}

export default Login;
