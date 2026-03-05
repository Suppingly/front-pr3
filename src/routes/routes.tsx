import React from "react";
import { Route,Routes } from 'react-router-dom'

import Skills from "./skillsPage/skillsPage";
import Projects from "./projectsPage/projectsPage";
import Home from "./homePage/homePage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    )
}
export default AppRoutes