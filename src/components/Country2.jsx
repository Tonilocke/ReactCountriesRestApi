import { useState } from "react";
import CountryDetails from "./CountryDetails";
const Country2 = ({ country })=>{ 
        const [isActive, setIsActive] = useState(false);
        function handleClick(){
                setIsActive(true);
        }
        return(
                !isActive?
                <div  className="country" onClick={()=>handleClick()}>
                    <img src={ country.flag } alt="flag of a country" />
                    <h4>{ country.name }</h4>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                </div>:
                <CountryDetails country={country} setIsActive={setIsActive} />
        
        )
}

export default Country2;