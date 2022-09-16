import React from "react";

import styles from "../static/css/login.module.css";
function Signup() {
    return (
        <>
            <div className={styles.aco2}>
                <div className={styles.navbar_section}>
                    <img className={styles.aco_image2} src="images/aco2.png" />
                    <h4 className={styles.signup}>회원가입</h4>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.input_container}>
                    <br />
                    <br />
                    <div className={styles.one_input}>
                        <label for="name" className={styles.label}>
                            이름
                        </label>
                        <input type="text" id="name" className={styles.input}></input>
                    </div>

                    <div className={styles.one_input}>
                        <label for="id" className={styles.label}>
                            학번
                        </label>
                        <input type="text" id="id" className={styles.input}></input>
                    </div>

                    <div className={styles.one_input}>
                        <label for="pw" className={styles.label}>
                            비밀번호
                        </label>
                        <input type="text" id="pw" className={styles.input}></input>
                    </div>
                </div>
            </div>
            <button className={styles.signup_button}>가입하기</button>
        </>
    );
}

export default Signup;
