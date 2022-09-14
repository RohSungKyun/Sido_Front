import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../static/css/Navbar.css";
function Navbar() {
    return(
        <>
            <header />
            <div className="navbar">
                <button className="logout">로그아웃</button>
                <img className="aco2" src="images/aco2.png"/>
                
                
                <div className="navbar_menu">
                    <NavLink to="/mypage">
                        <img className="icon" id="home" src="images\Vectorhome.png"/>
                    </NavLink>
                    <ul>
                        <NavLink to="/average">
                            <li>평균취득학점</li>
                        </NavLink>
                        <NavLink to="/AddCourse">
                            <li>수강강좌입력</li>
                        </NavLink>
                        <NavLink to="/EditProfile">
                            <li>개인정보수정</li>
                        </NavLink>
                    </ul>
                </div>
                
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;