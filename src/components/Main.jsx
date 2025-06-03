import { useState,useEffect } from "react";
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import Countries from "./Countries";
import * as data from "../data.json";


const Main = ({ region })=>{
    const [isActive, setIsActive] = useState(false);
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        if(region !=""){
            setCountries(data.filter(country =>country.region == region));
         }
         else{
             setCountries([...data]);
         }
    },[region]);
    
    return(
        <main>
            {<Countries countries = { countries } />}
        </main>
        
        );
   
}

export default Main;