import { useState, useEffect } from "react";
import Countries from "./Countries";
import * as data from "../data.json";
import CountryDetails from "./CountryDetails";

const Main = ({ region, searchCountry })=>{
    const [isActive, setIsActive] = useState(false);
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(null);
    useEffect(()=>{
        if(region !=""){
            setCountries(data.filter(country =>country.region == region));
        }
        else{
            setCountries([...data]);
        }
        if(searchCountry != ""){
            setCountries(data.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase())));
        }
    },[region, searchCountry, country]);
    
    return(
        <main>
            {!isActive? <Countries countries = { countries } setCountry={setCountry} setIsActive={setIsActive}/> : null}
            {isActive?<CountryDetails country={country} setIsActive={setIsActive} setCountry={setCountry}/> : null}
        </main>
        
        );  
}
export default Main;