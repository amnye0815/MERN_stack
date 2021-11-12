import React from 'react';

const Tabs = (props) => {
    const {tabContent, setTabContent} = props;

    // const onClickHandler = (e, value) => {
    //     e.preventDefault();
    //     return 
    // }
    // onClickHandler to iterate through array that corresponds with the different color/tab content
    // Click functions on buttons that corresponds with content (yellow, magenta, cyan)
    // NINJA: When button is clicked the button itself changes 
    return (
        <div className="btn-group">
            <button className="btn" onClick={(e)=>setTabContent("This is Tab 1")}>Tab 1</button>
            <button className="btn" onClick={(e)=>setTabContent("This is Tab 2")}>Tab 2</button>
            <button className="btn" onClick={(e)=>setTabContent("This is Tab 3")}>Tab 3</button>
        </div>
    );
}

export default Tabs;