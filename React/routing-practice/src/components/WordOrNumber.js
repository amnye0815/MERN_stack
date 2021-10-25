import React from 'react';


const WordOrNumber = (props) => {
    return(
        <div>
            {
                isNaN(props.word)?
                <p>The word is: {props.word}</p>
                :<p>The number is: {props.word}</p>
            }
        </div>
    );
}
export default WordOrNumber;