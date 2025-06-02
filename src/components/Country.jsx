import { useState } from "react";
import CountryDetails from "./CountryDetails";
const Country = ({ country, isActive, setIsActive, countryName, setCountryName })=>{
    
    function handleClick(){
        setIsActive(true);
        setCountryName(country.name);
    }
        return(
            <div onClick={()=>handleClick(country)} className="country">
                <img src={ country.flag } alt="flag of a country" />
                <h4>{ country.name }</h4>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </div>
        )
}

export default Country;