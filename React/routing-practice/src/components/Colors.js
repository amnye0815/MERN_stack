import React from 'react';


const Colors = (props) => {
    return(
        <div style={{ color: {props.color} backgroundColor: {props.backgroundColor} }}
            <p>The word is: {props.word}</p>
        </div>
    );
}
export default Colors;