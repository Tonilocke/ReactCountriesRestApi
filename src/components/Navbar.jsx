import { useState } from "react";

const darkmodeIcon = new URL("../darkmodeIcon2.svg", import.meta.url);
const Navbar = ()=>{
    const [darkMode, setDarkMode]  = useState(true);

    function handleClickMode(){
        if(darkMode){
            document.body.className = "light-theme";
            setDarkMode(false);
        }
        else{
            document.body.className = "dark-theme";
            setDarkMode(true);
        }
    }
return(
    <nav>
        <h2>Where in the world?</h2>

        <span onClick={()=>handleClickMode()}><img src={ darkmodeIcon } alt="dark mode icon"/>Dark Mode</span>
    </nav>
);
}

export default Navbar;