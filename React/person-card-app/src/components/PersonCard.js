import React, {useState} from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [ year, setYear ] = useState(age);
        
        const buttonClick = () => {
            setYear(year + 1);
        }
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {year}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ buttonClick }>Make {firstName} have a birthday!</button>
        </div>
    );
}
export default PersonCard;