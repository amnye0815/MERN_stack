import React from 'react';

const Header = (props) => {
    return(
        <div>
            <ul style={{display:"flex", listStyle:"none", justifyContent:"space-around", margin:"30px", borderBottom:"3px double black", paddingBottom:"20px"}}>
                <li><a href="/" style={{textDecoration:"none", color:"black"}}>Austin Nye</a></li>
                <li><a href="/" style={{textDecoration:"none", color:"black"}}>To-Do List Assignment</a></li>
                <li><a href="/" style={{textDecoration:"none", color:"black"}}>MERN Oct 2021 Cohort</a></li>
            </ul>
        </div>
    );
}

export default Header;