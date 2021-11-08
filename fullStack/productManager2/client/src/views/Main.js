import React, { useState } from 'react';
import Display from '../components/Display';
import Form from '../components/Form';

const Main = () => {
    const [product, setProduct] = useState([]);

    return(
        <div>
            <Form product={product} setProduct={setProduct} />
            <hr/>
            <Display product={product} setProduct={setProduct} />
        </div>
    )
}
export default Main;