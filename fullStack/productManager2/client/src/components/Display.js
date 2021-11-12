import React, { useEffect } from 'react'; 
import { Link } from '@reach/router';
import axios from 'axios';


const Display = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                setProduct(res.data);
            });
    }, [])

    return (
        <div>
            <h1>Current Products</h1>
            {product.map((product, index) =>{
                return <div>
                    <Link to = {`/products/${product._id}`} key={index}>{product.title}</Link>
                    </div>
            })}
        </div>
    )
}
export default Display;