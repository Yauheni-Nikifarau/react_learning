import React from "react";
import {NavLink} from "react-router-dom";

const Mode = (props) => {
    return (
        <NavLink to={'/training/' + props.path}>
            <div className={'mode-container ' + props.modeClassName}>
                <div>
                    <h2 className='mode-title'>{props.modeTitle}</h2>
                    <p className={'mode-description ' + props.modeClassName}>{props.modeDescription}</p>
                </div>
                <div>
                    <img src={props.modeImage} alt="shot" className='mode-image'/>
                </div>
            </div>
        </NavLink>
    )
}

export default Mode;