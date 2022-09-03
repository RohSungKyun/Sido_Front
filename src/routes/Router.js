import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
function App_Router() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/Signup" element={<Signup />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App_Router;
