import React, { useState } from 'react';

const BoxForm = (props) => {
    const {newBoxArray, setNewBoxArray} = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();

        setNewBoxArray([...newBoxArray, {color: color, size: size + "px",}]);
        setColor("");
        setSize("");
    }

    return (
        <form onSubmit={ submitHandler }>
            <div>
                <label>Color </label>
                <input type="text" value={ color } onChange={(e)=> setColor(e.target.value)} />
            </div>
            <div>
                <label>Size (in px) </label>
                <input type="text" value={ size } onChange={(e)=> setSize(e.target.value)} />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
}

export default BoxForm;