import React from 'react';

const Tabs = (props) => {
    const tabContent = ["This is the yellow tab. It should change the window to yellow.", 
    "This is the magenta tab. It should change the window to magenta.", 
    "This is the cyan tab. It should change the window to cyan.",
    ];

    // onClickHandler to iterate through array that corresponds with the different color/tab content
    // Click functions on buttons that corresponds with content (yellow, magenta, cyan)
    // NINJA: When button is clicked the button itself changes 

    return (
        <div className="btn-group">
            <button className="btn">Tab 1</button>
            <button className="btn">Tab 2</button>
            <button className="btn">Tab 3</button>
        </div>
    );
}

export default Tabs;