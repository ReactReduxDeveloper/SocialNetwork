import React from 'react';
import c from "./Navbar.module.css";
import {NavLink, Link} from "react-router-dom";
export const Navbar = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <Link to="./profile"  >Profile</Link>
        </div>
        <div className={c.item}>
            <Link to="./dialogs">Messages</Link>
        </div>
        <div className={c.item}>
            <a>News</a>
        </div>
        <div className={c.item}>
            <a>Music</a>
        </div>
        <div className={c.item}>
            <a>Settings</a>
        </div>
    </nav>
}


