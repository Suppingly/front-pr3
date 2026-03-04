import React from "react";
import { Route,Routes } from 'react-router-dom'

import Skills from "./skillsPage/skillsPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<></>}/>
            <Route path="/skills" element={<Skills/>}/>
        </Routes>
    )
}
export default AppRoutes