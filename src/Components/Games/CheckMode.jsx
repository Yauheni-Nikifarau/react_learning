import React, {useEffect, useState} from "react";

export default (props) => {
    const checkWord = (word) => {
        if (library.length - 1 !== currentWordIndex) {
            if (word === library[currentWordIndex].word) {
                props.setCorrectAnswers(props.correctAnswers + 1)
                props.setScore(props.score +1)
                setCurrentWordIndex(currentWordIndex + 1)
            } else {
                props.setWrongAnswers(props.wrongAnswers + 1)
            }
        } else {
            alert('done');
            props.setCorrectAnswers(0)
            props.setWrongAnswers(0)
            setCurrentWordIndex(0)
        }
    }
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || [{id:0, word: '', translate: ''}])
    const [checkArr, setCheckArr] = useState([])
    const [initialScore, setInitialScore] = useState(0)
    const currentWord = library[currentWordIndex].translate
    useEffect(() => {
        const filterArr = library.filter((item, index) => index !== currentWordIndex)
        filterArr.sort(() => Math.random() - 0.5)
        const checkArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word]
        setCheckArr(checkArr.sort(() => Math.random - 0.5))
    }, [props.correctAnswers])
    useEffect(() => {
        return () => { //если useEffect возвращает функцию, то она вызывается в момент componentWillUnmount
            props.setScore(initialScore)
        }
    }, [])
    return (
        <div className='mode-wrapper'>
            <div className='mode-title-word'>
                {currentWord}
            </div>

            <p className='mode-title-word-description'>Set translation for this word</p>

            <div className='check-item-block'>
                {checkArr.map((item, index) =>
                    <div key={index} className='check-item' onClick={() => checkWord(item)}>
                        {item}
                    </div>
                )}
            </div>
        </div>
    )
}