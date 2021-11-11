import React, { useState} from 'react';

const Form = (props) => {
    return(
        <form>
            <label>Name: </label>
            <input type="text" />
            <input type="submit" />
        </form>
    )
}

export default Form;