import { useState } from "react";
import Country2 from "./Country2";
const Countries = ({ countries })=>{
     return(
        countries.length? 
            countries.map( country => <Country2 country = {country }  key={country.name}/>): null
     )
}

export default Countries;