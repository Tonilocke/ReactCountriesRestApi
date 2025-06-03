import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from "./components/Searchbar";
import Main from './components/Main'
export function App() {

  const [region, setRegion] = useState(""); 
  return (
    <>
      <Navbar />
      <SearchBar  setRegion={ setRegion }/>
      <Main region={ region }/>
    </>
  );
}
