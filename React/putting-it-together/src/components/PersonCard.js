import React, { useState } from 'react';

const PersonCard = (props) => {
    const { name, haircolor } = props;
    const [age, setAge] = useState();

    const handleClick = (e) => {

        setAge(age+1);
        console.log(e);
        console.log(e.target);

    }

    return (
        <div>
            <h1>{ name }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { haircolor }</p>
            <button onClick={ handleClick }>Birthday Button for { name }</button>
        </div>
    )
}

export default PersonCard;