
import './App.css';
import * as data from "./data.json";
import FirstComponent from './components/FirstComponent';
import Navbar from './components/Navbar';
import SearchBar from "./components/Searchbar";
import Main from './components/Main'
export function App() {

  return (
    <>
      <Navbar />
      <SearchBar />
      <Main/>
    </>
  );
}
