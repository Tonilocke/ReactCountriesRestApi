import { useState } from "react";
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import * as data from "../data.json";


const Main = ()=>{
    const [isActive, setIsActive] = useState(false);
    const [countryName, setCountryName] = useState("");
    return(
        <main>
            {data.map(country =>!isActive? <Country country = { country } key={country.name} isActive = {isActive} setIsActive= {setIsActive} countryName={countryName} setCountryName={setCountryName}/>:
                    country.name ==countryName?<CountryDetails country ={country} isActive={isActive} setIsActive={setIsActive}/>: null
                )
            }
        </main>
        
    );
}

export default Main;