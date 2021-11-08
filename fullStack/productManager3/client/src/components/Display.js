import React from 'react'; 
import { Link } from '@reach/router';

const Display = (props) => {
    return (
        <div>
            <h1>Current Products</h1>
            {props.product.map((product, index) =>{
                return <div>
                    <Link to = "/products/:id" key={index}>{product.title}</Link>
                    <button>Delete</button>
                    </div>
            })}
        </div>
    )
}
export default Display;