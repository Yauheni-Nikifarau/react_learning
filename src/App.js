import React, {useState} from "react";
import {BrowserRouter, Route, Router} from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav/Nav";
import Score from "./Components/Score";
import Library from "./Components/Library";
import Training from "./Components/Training";
import Learn from "./Components/Learn";
import Game from "./Components/Games/Game";
import {Context} from "./context";

const App = () => {
  const [score, setScore] = useState(+localStorage.getItem('score') || 0);
  const [level, setLevel] = useState(0);
  const checkLevel = () => {
      const level = Math.floor((0.5 + Math.sqrt(1 + 8*(score)/(5)) / 2)) - 1
      setLevel(level)
  }
  return (
    <BrowserRouter>
        <Context.Provider value={{setScore, score}}>
            <div className="app-wrapper">
            <Nav level={level} />
            <Score score={score} />
            <Route path='/library' component={Library} />
            <Route path='/training' component={Training} />
            <Route path='/learn'>
                <Learn  setScore={setScore}
                        score={score}
                        checkLevel={checkLevel}
                />
            </Route>
            <Route path='/training/check-mode'>
                <Game setScore={setScore}
                        score={score}
                      checkLevel={checkLevel}

                />
            </Route>
            <Route path='/training/write-mode'>
                <Game setScore={setScore}
                      score={score}
                      checkLevel={checkLevel}
                />
            </Route>
        </div>
        </Context.Provider>
    </BrowserRouter>
  )
}

export default App;
