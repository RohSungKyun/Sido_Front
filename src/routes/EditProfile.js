import React from "react";
import Navbar from "../components/Navbar";
import "../static/css/EditProfile.css";
function EditProfile() {
    return(
        <>
            <Navbar />
            <div className="ChangeSemester">
                <div>
                    <span className="subtitle">이수학기수정</span>
                </div>
                <div>
                    <span className="text1">나의 이수학기 : </span>
                    <input type="text" className="inputbox"/>
                    <span className="text2">학기</span>
                </div>
                <div className="font">
                    <button type="button" className="changebtn">변경하기</button>
                </div>
            </div>
        </>
    );
}

export default EditProfile;