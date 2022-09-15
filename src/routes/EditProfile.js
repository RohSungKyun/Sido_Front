import React from "react";
import Navbar from "../components/Navbar";
import "../static/css/EditProfile.css";
function EditProfile() {
    return(
        <>
            <Navbar />
            <div className="ChangeSemester">
                <span className="subtitle">이수학기수정</span>
                <span className="text1">나의 이수학기 : </span>
                <input type="text" className="inputbox"/>
                <span className="text2">학기</span>
                <button type="button" className="changebtn">변경하기</button>
            </div>
        </>
    );
}

export default EditProfile;