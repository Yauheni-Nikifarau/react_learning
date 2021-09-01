import React from "react";

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id:0, word: '', translate: ''}]
        }
        this.wordsRef = Array(this.state.library.length)
        this.changeMode = this.changeMode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.addWordToLibrary = this.addWordToLibrary.bind(this);
        // this.checkWord = this.checkWord.bind(this);
    }

    componentDidMount() {
            document.addEventListener('keydown', (event) => {
                if (this.state.value.length > 0 && this.state.isOpen && event.key === 'Enter') {
                    this.addWordToLibrary()
                }
            })
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    getValue(event) {
        const value = event.currentTarget.value;
        this.setState(() => ({
            value: value
        }))
        if (value) {
            this.setState(() => ({
                translation: 'translation of word ' + value
            }))
        } else {
            this.setState(() => ({
                translation: ''
            }))
        }
    }

    async addWordToLibrary() {
        await this.setState(prevState => ({
            library: [...prevState.library, {id: this.state.library.length, word: this.state.value, translate: this.state.translation}]
        }))
        await localStorage.setItem('library', JSON.stringify(this.state.library))
        this.changeMode()
    }

    async removeWordFromLibrary(index) {
        await this.setState(prevState => ({
            library: prevState.library.filter((word, i) => i !== index)
        }))
        await localStorage.setItem('library', JSON.stringify(this.state.library))
    }

    // checkWord() {
    //     let s = this.wordsRef;
    // }

    render() {
        return (
            <div className='page-container'>
                <div className="add-word-container">
                    {!this.state.isOpen ?
                        <span className="label-title">Add new word</span> :
                        <div>
                            <input onChange={this.getValue} placeholder="Enter new word"/>
                            <span>{this.state.translation}</span>
                            <button onClick={this.addWordToLibrary} className="btn-round check"/>
                        </div>
                    }
                    <button onClick={this.changeMode} className={this.state.isOpen ? "btn-round close" : "btn-round add"} />
                </div>

                <div className='library-container'>
                    <div className='library-header'>
                        <div>Word</div>
                        <div>Translate</div>
                        <div>Learn level</div>
                    </div>
                    {this.state.library.map((word, index) => (
                        <div key={index}
                            ref={el => this.wordsRef[index] = el}
                        >
                            <div>
                                {word.id}
                            </div>
                            <div>
                                {word.word}
                            </div>
                            <div>
                                {word.translate}
                            </div>
                            <div onClick={() => this.removeWordFromLibrary(index)}>
                                Delete
                            </div>
                        </div>
                    ))}
                </div>
                {/*<button onClick={this.checkWord}>Check the word</button>*/}
            </div>
        )
    }
}

export default Library;