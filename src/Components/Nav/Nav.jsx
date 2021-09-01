import React from "react";
import LogoContainer from "./LogoContainer";
import {NavLink} from "react-router-dom";

const Nav = ({level}) => {
    return (
        <nav className="nav">
            <LogoContainer level={level} />
            <ul className="nav-container">
                <NavLink to='/library'><li>Library</li></NavLink>
                <NavLink to='/training'><li>Training</li></NavLink>
                <NavLink to='/learn'><li>Learn</li></NavLink>
            </ul>
        </nav>
    )
}

export default Nav;