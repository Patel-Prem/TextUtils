import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    // var [text, setText] = useState('Write your content here...');
    const [text, setText] = useState('');
    // text = "new text" //wrong way to update text
    // setText("new text") //correct way to update text
    const [words, setWordsCount] = useState(0)
    const [chars, setCharsCount] = useState(0)

    const toUpperCase = () => {
        // console.log('toUpperCase');
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const toLowerCase = () => {
        // console.log('toLowerCase');
        let toLowerCase = text.toLowerCase();
        setText(toLowerCase);
    }

    const toCapitalize = () => {
        // console.log('toCapitalize');
        var wordArr = text.split(" ");
        let toCapitalize = "";
        for (let i = 0; i < wordArr.length; i++) {
            wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1).toLowerCase();
            if (i === wordArr.length - 1) toCapitalize += wordArr[i];
            else toCapitalize = toCapitalize + wordArr[i] + " ";
        }
        setText(toCapitalize);
    }

    const clearText = (event) => {
        // console.log('clearText');
        event.target.value = ''
        updateText(event);
    }

    const copyText = (event) => {
        // console.log('copy text');
        let copyText = document.getElementById('textBox')
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const removeExtraSpaces = () => {
        let nexText = text.split(/[ ]+/).join(' ')
        setText(nexText)
    }

    const updateText = (event) => {
        // console.log('updateText', event.target.value);
        let newText = event.target.value;
        setText(event.target.value);

        // To calculate words from new line (new line by enter key)
        let newWords = newText.split('\n')
        let wordCount = 0;
        let charCount = 0;
        // console.log('---', newWords)
        newWords.forEach((element) => {
            charCount += element.length;
            wordCount += element.split(' ').filter((e) => {
                return e !== ''
            }).length;
        })
        setWordsCount(wordCount)
        setCharsCount(charCount)
        //total words:: text.split(/\s+/).filter((element) => element !== "").length
    }

    return (
        <>
            <div className="container">
                <form>
                    <h1 style={{ color: props.colorAndTheme.toggleColor }}>{props.heading}</h1>
                    <div className="form-group my-3">
                        <textarea className="form-control m-1" id="textBox" rows="8" value={text} onChange={updateText} placeholder={props.textAraePlaceholder}></textarea>
                    </div>
                    {/* <div className="container d-flex flex-wrap justify-content-start" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}> */}
                    <div className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={toLowerCase}>lowercase</button>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={toCapitalize}>Capitalize Letter</button>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={toUpperCase}>UPPERCASE</button>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={copyText}>Copy Text</button>
                        <button className={`btn btn-${props.colorAndTheme.toggleTheme} mx-1 my-1`} type="button" onClick={clearText}>Clear Text</button>
                    </div>
                </form>
                <div className="container my-3" style={{ color: props.colorAndTheme.toggleColor }}>
                    <h3>Your Text Summary</h3>
                    <p className='p-0 m-0'>
                        Words: {words}, 
                    </p>
                    <p className='p-0 m-0'>
                        Characters (Includeing Spaces): {chars}, 
                    </p>
                    <p className='p-0 m-0'>
                        Only Characters: {chars - text.split(' ').length + 1}, 
                    </p>
                    <p className='p-0 m-0'>
                        Only Spaces: {text.split(' ').length - 1}
                    </p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : 'Nothing To Preview'}</p>
                </div>

            </div>


        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Enetr Your Text',
    textAraePlaceholder: 'Write your content here...'
}