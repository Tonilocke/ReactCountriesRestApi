import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from "./components/Searchbar";
import Main from './components/Main'
export function App() {

  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState(""); 
  return (
    <>
      <Navbar />
      <SearchBar  setRegion={ setRegion } setSearchCountry={ setSearchCountry }/>
      <Main region={ region } searchCountry={ searchCountry }/>
    </>
  );
}
