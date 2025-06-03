import { useState } from "react";
const searchIcon = new URL("../searchIcon.svg", import.meta.url);
const SearchBar = ({  setRegion })=>{
    

    function handleRegion(e){
       e.preventDefault();
       setRegion(e.target.value);
    }
    return(
       <form action=""  >
            <label htmlFor="nameFilter">
                <img src={searchIcon} alt="search icon" /> <input type="text" name="nameFilter" id="nameFilter" placeholder="Search for a country"/>
            </label>
        
            <select name="regions" id="regions" onChange={(e)=>handleRegion(e)}>
                <option value=""> Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
       </form>
    );
}

export default SearchBar;