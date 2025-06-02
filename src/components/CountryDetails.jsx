const backArrow = new URL("../backArrow.png", import.meta.url);
const CountryDetails = ({ country, isActive, setIsActive })=>{
    return(
        <section className="country-details">
            <button onClick={()=>setIsActive(false)}> <img src={ backArrow } alt="arrow icon" /> Back</button>
            <div>
                <img src={country.flag} alt={country.name + "flag"} className="flag"/>
                <div>
                    <h3>{country.name}</h3>
                    <p><span>Native name:</span> {country.nativeName}</p>
                    <p><span>Population:</span>  {country.population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Sub region:</span> {country.subregion}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                    <p><span>Top level Domain:</span> {country.topLevelDomain}</p>
                    <p><span>Currencies:</span> {country.currencies> 1? country.currencies.map(currency => <span className="currencies">{ currency.name } </span>):<span className="currencies">{ country.currencies[0].name } </span> }</p>
                    <p><span>Languages:</span> {country.languages > 1?country.languages.map(language => <span className="languages">{ language.name } </span>):<span className="languages">{ country.languages[0].name } </span> }</p>
                </div>
            </div>
        </section>
    );
}

export default CountryDetails;