import React, {useRef, useState, useContext, useEffect} from "react";
import {Context} from "../../context";

export default (props) => {
    const context = useContext(Context);
    // const arrayElement = ['1', '3', '5']
    const inputRef = useRef()
    // const arrayRef = useRef(Array(arrayElement.length))
    // const checkWord = () => {
    //     // let s = inputRef.current.value
    //     let s = arrayRef.current[2]
    //     console.log(s)
    // }
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5) || [{id: 0, word: 'a', translate: 'а'}])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        return () => {
            localStorage.setItem('score', context.score);
        }
    })
    const checkGame = () => {
        if (index === library.length - 1) {
            if(inputRef.current.value.toLowerCase() === library[index].translate.replace('translation of word ', '').toLowerCase()) {
                setIndex(index + 1)
                inputRef.current.value = ''
                props.setCorrectAnswers(props.correctAnswers + 1)
                context.setScore(context.score + 1)
                props.checkLevel()
            } else {
                props.setWrongAnswers(props.wrongAnswers + 1)
            }
        } else {
            setLibrary()
        }

    }
    const checkKeyPress = (event) => {
        if (event.key === 'Enter') {
            alert('good job')
            checkGame(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5))
        }
    }
    return (
        <div className='mode-wrapper'>
            <div className='mode-title-word'>
                {library[index].word}
            </div>
            <p className='mode-title-word-description'>Set translation for this word</p>
            <div className='input-block'>
                <input onKeyPress={checkKeyPress} ref={inputRef} type="text" placeholder='Enter word' className='customInput' />
                <button className='btn-enter' onClick={checkGame}>Enter</button>
            </div>

            {/*<button onClick={checkWord}>Check</button>*/}
            {/*{arrayElement.map((elem, i) =>*/}
            {/*    <div ref={el => arrayRef.current[i] = el}>*/}
            {/*        {elem}*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}