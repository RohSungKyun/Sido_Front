import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../static/css/AddCourse.css";
function AddCourse() {
    const [selects, setSelects]=useState();
    return(
        <>
        <Navbar />
        <div className="addcourse">        
            <div>
                <span className="lecture">수강강좌 :</span>
            </div>
            
            <div>
                <select className="Classification" value={selects} onChange={e=>setSelects(e.target.value)}>
                <option>분류</option>
                    <option>공통교양</option>
                    <option>전공필수</option>
                    <option>전공선택(기초)</option>
                    <option>전공선택(전문)</option>
                    <option>일반교양</option>
                    <option>학문기초</option>
                </select>
            </div>

            <div>
                <select className="English">
                <option>영어강의여부</option>
                    <option value="O">O</option>
                    <option value="X">X</option>
                </select>
            </div>

            <div>
                <input type="text" className="CourseName"/>
            </div>

            <button type="button" className="addButton">추가하기</button>
        </div>
        </>
        
    );
}

export default AddCourse;