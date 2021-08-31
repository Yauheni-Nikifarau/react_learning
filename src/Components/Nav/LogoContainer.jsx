import React from "react";
import logo from '../../img/logo.png';
const LogoContainer = (props) => {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo"/>
            <span className="level-title">LEVEL {props.level}</span>
        </div>
    )
}

export default LogoContainer;