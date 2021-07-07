import React from "react";
import Item from "./Item";

function Header(props){
    
    function handleClick(){
        props.onDarkModeClick()
    }
return(
<header>
    <h2>Shopster</h2>
        <button onClick={handleClick}>
            {props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
</header>
)}

export default Header;