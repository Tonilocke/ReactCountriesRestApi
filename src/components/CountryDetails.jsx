const backArrow = new URL("../backArrow2.svg", import.meta.url);
const CountryDetails = ({ country, setIsActive })=>{
    return(
        <section className="country-details">
            <button onClick={()=>setIsActive(false)}> <img src={ backArrow } alt="arrow icon" /> Back</button>
            <div className="container">
                <img src={country.flag} alt={country.name + "flag"} className="flag"/>
                <div>
                    <h3>{country.name}</h3>
                    <section className="infos">
                        <p><span className="str">Native name:</span> {country.nativeName}</p>
                        <p><span className="str">Population:</span>  {country.population}</p>
                        <p><span className="str">Region:</span> {country.region}</p>
                        <p><span className="str">Top level Domain:</span> {country.topLevelDomain}</p>
                        {Object.keys(country).includes("currencies")?
                        <p><span className="str">Currencies:</span> {country.currencies.length > 1? country.currencies.map(currency => <span className="currencies" key ={ currency.name} >{ currency.name } </span>):<span className="currencies" key ={ country.currencies[0].name }>{ country.currencies[0].name } </span> }</p>: null }
                        {Object.keys(country).includes("languages")?
                        <p><span className="str">Languages:</span> {country.languages.length > 1?country.languages.map(language => <span className="languages" key ={ language.name}> { language.name } </span>):<span className="languages" key ={ country.languages[0].name }>{ country.languages[0].name } </span> }</p>: null }
                    </section>
                    <p><span className="str">Sub region:</span> {country.subregion}</p>
                    <p><span className="str">Capital:</span> {country.capital}</p>
                    { Object.keys(country).includes("borders")? 
                    <section className="border-countries">
                        <p><span className="str">Border countries:</span>{country.borders.length >1? country.borders.map(border => <span key={border}> { border }</span>): <span key={border}> {country.borders[0]} </span>} </p>
                    </section>: null
                    }
                </div>
                
            </div>
        </section>
    );
}

export default CountryDetails;