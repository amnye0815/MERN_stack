import React from 'react';


const Home = (props) => {

    if(!props.word){
        return(
            <h1>Welcome!</h1>
        );
    } else{
        if (isNaN(props.word)) {
            return(
                <p style={props.color? {color: props.color, backgroundColor: props.bgCol} :null}>
                The word is: {props.word}
                </p>
            );
        }
    {
    else{
        return(
            <p>The number is: {props.word}</p>
        )
    }
}

export default Home;