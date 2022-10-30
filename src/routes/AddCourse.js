import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../static/css/AddCourse.css";
function AddCourse() {
    const classifications = [
        "공통교양",
        "전공필수",
        "전공선택(기초)",
        "전공선택(전문)",
        "일반교양",
        "학문기초"
    ]
    const [course, setCourse]=useState([]);
    const [english, setEnglish]=useState([]);
    const [courseName, setCourseName]=useState('');

    const handleClick=()=>{

        alert(course+", "+english+", "+courseName)
    }
    

    return(
        <>
        <div className="addcourse_page">
                <Navbar />
            <div className="addcourse">        
                <div>
                    <span className="lecture">수강강좌 :</span>
                </div>
                
                <div>
                    <select className="Classification" value={course} onChange={e=>setCourse(e.target.value)}>
                        <option selected disabled>분류</option>
                        {classifications.map(classification => <option value={classification}>{classification}</option>)}
                    </select>
                </div>

                <div>
                    <select className="English" value={english} onChange={e=>setEnglish(e.target.value)}>
                    <option selected disabled>영어강의여부</option>
                        <option value="O">O</option>
                        <option value="X">X</option>
                    </select>
                </div>

                <div>
                    <input type="text" className="CourseName" value={courseName} onChange={e=>setCourseName(e.target.value)}/>
                </div>

                <button type="button" className="addButton" onClick={handleClick}>추가하기</button>
            </div>
        </div>
        
        </>
        
    );
}

export default AddCourse;