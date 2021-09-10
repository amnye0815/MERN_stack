import React from 'react';

const BoxDisplay = (props) => {

    const { boxColorArray } = props;

    return (
        <div>
            { boxColorArray.map((box, index) => (
                <div key={index} style={{
                    display: "inline-block",
                    margin: "10px",
                    height: box.size,
                    width: box.size,
                    backgroundColor: box.color
                }}>
                </div>
            ))
            }
        </div>
    );
}

export default BoxDisplay;