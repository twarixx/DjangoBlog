import {Outlet} from 'react-router-dom';
import React from "react";
import {Navbar} from "./Navbar";

export const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}