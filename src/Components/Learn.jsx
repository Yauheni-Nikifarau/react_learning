import React, {useState} from "react";

const Learn = () => {
    const library = JSON.parse(localStorage.getItem('library')) || [{id: 0, word: '', translate: ''}];
    const [index, setIndex] = useState(0);
    const word = library[index];
    const nextWord = () => {
        if (index < library.length - 1) {
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    }
    return (
        <div className='learn-wrapper'>
            <div className="learn-container">
                <div className='percentage'>50%</div>

                <div className='word-translation'>
                    {word.translate}
                </div>

                <div className='word-container'>
                    <span className="description-label">Translation</span>

                    <span className='word'>{word.word}</span>
                </div>
            </div>
            <div onClick={nextWord} className="btn-next">
                &#8594;
            </div>
        </div>
    )
}

export default Learn;