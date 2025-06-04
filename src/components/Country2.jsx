import { useState } from "react";
import CountryDetails from "./CountryDetails";
const Country2 = ({ country, setCountry,setIsActive })=>{ 
        function handleClick(){
                setIsActive(true);
                setCountry(country);
        }
        return(             
                <div  className="country" onClick={()=>handleClick()}>
                    <img src={ country.flag } alt="flag of a country" />
                    <h4>{ country.name }</h4>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                </div>
        )
}

export default Country2;