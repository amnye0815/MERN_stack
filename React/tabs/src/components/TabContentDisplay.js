import React from 'react';

const TabContentDisplay = (props) => {
    const { tabContent, setTabContent } = props;

    return (
        <p style={{ alignItems: "center", justifyContent: "center", height: "150px", marginLeft: "650px", marginRight: "650px", border: "3px solid black" }}>This is the tab content</p>
    );
}
export default TabContentDisplay;