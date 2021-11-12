import React, { useState } from 'react';

const PersonCard = (props) => {
    const { name, age, haircolor } = props;
    const [bdayAge, setBdayAge] = useState(age);

    const handleClick = (e) => {

        setBdayAge(bdayAge+1);
        console.log(e);
        console.log(e.target);

    }

    return (
        <div>
            <h1>{ name }</h1>
            <p>Age: { bdayAge }</p>
            <p>Hair Color: { haircolor }</p>
            <button onClick={ handleClick }>Birthday Button for { name }</button>
        </div>
    )
}

export default PersonCard;