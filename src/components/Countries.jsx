import { useState } from "react";
import Country2 from "./Country2";
const Countries = ({ countries,setCountry, setIsActive })=>{
     return(
        countries.length? 
            countries.map( country => <Country2 country = {country } setCountry={setCountry}  setIsActive={setIsActive} key={country.name}/>): null
     )
}

export default Countries;