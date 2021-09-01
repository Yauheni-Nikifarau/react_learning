import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import CheckMode from "./CheckMode";
import WriteMode from "./WriteMode";

export default (props) => {
    const location = useLocation()
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    return (
        <div className='game-page'>
            <NavLink to='/training'>
                <button className='btn-exit'>
                Exit
                </button>
            </NavLink>
            <div className='point-block'>
                <span className='correct-title'>Correct: {correctAnswers}</span>
                <span className='error-title'>Errors: {wrongAnswers}</span>
            </div>
            {location.pathname === '/training/check-mode' ?
                <CheckMode setScore={props.setScore}
                           score={props.score}
                           checkLevel={props.checkLevel}
                           correctAnswers={correctAnswers}
                           wrongAnswers={wrongAnswers}
                            setCorrectAnswers={setCorrectAnswers}
                            setWrongAnswers={setWrongAnswers} /> :
            location.pathname === '/training/write-mode' ?
                <WriteMode setScore={props.setScore}
                           score={props.score}
                           checkLevel={props.checkLevel}
                           correctAnswers={correctAnswers}
                           wrongAnswers={wrongAnswers}
                           setCorrectAnswers={setCorrectAnswers}
                           setWrongAnswers={setWrongAnswers} /> : null}
        </div>
    )
}