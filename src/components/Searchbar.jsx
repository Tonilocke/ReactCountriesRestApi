const searchIcon = new URL("../searchIcon.svg", import.meta.url);
const SearchBar = ()=>{
    return(
       <form action="" >
        <label htmlFor="nameFilter">
            <img src={searchIcon} alt="search icon" />
        </label>
        <input type="text" name="nameFilter" id="nameFilter" placeholder="Search for a country"/>
        <select name="regions" id="regions">
            <option value=""> Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
       </form>
    );
}

export default SearchBar;