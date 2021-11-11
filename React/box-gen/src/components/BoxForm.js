import React, { useState } from 'react';

const BoxForm = (props) => {
    const { boxColorArray, setBoxColorArray } = props;

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxColorArray( [...boxColorArray, {color: color, size: size + "px",}]);
        setColor("");
        setSize(50);
    }

    return(
        <form onSubmit={ submitHandler }>
            <div>
                <label>Color</label> 
                <input type="text" name="color" value={ color } onChange={ (e) => setColor(e.target.value) } />
            </div>
            <div>
                <label>Size</label>
                <input type="text" name="size" value={ size } onChange={ (e) => setSize(e.target.value) } />
            </div>
            <button>Add</button>
        </form>
    );
};

export default BoxForm;