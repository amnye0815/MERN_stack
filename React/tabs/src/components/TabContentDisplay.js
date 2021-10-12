import React from 'react';

const TabContentDisplay = (props) => {
    const tabContent = ["This is the yellow tab. It should change the window to yellow.", 
    "This is the magenta tab. It should change the window to magenta.", 
    "This is the cyan tab. It should change the window to cyan.",
    ];

    return tabContent.map( (item, index) =>
        <p key={index} style={{ alignItems: "center", justifyContent: "center", height: "150px", marginLeft: "650px", marginRight: "650px", border: "3px solid black" }}>{item}</p>
    );
}
export default TabContentDisplay;