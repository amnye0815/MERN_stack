import React from 'react'; 

const Display = (props) => {
    return (
        <div>
            <h1>Current Products</h1>
            {props.product.map((product, index) =>{
                return <p key={index}>{product.title}</p>
            })}
        </div>
    )
}
export default Display;