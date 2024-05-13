import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import CountryCard from './Components/CountryCard';
import FilterBar from './Components/FilterBar';


function App() {
  const [allCountries, setAllCountries] = useState()                  //  For the case of showing all countries
  const [filterCountryData, setFilteredCountryData] = useState()      //  For the case of showing filterd out countries
  const [searchWord, setSearchWord] = useState('')                    //  State for search input
  const [groupByContinent, setGroupByContinent] = useState()          //  State for dropdown region filtering

  
  useEffect(() => {                                                   //  API call to get countries data
    fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
    .then((response) => response.json())
    .then((result) => setAllCountries(result))
    .catch((error) => console.error(error));
  
    return () => {
    }
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <FilterBar searchWord={searchWord} setSearchWord={setSearchWord} setGroupByContinent={setGroupByContinent} filterFuncForCountryData={setFilteredCountryData} CountryData={allCountries}/>
      {!searchWord && !groupByContinent && allCountries ?
        <div className='JobsContainerMain'>
        { allCountries.map((elem)=><div><CountryCard name={elem.name.common} population={elem.population} region={elem.region} capital={elem.capital[0]} flags={elem.flags.png}/></div>)}
        </div>
        :
        filterCountryData ? 
          <div className='JobsContainerMain'>
            { filterCountryData.map((elem)=><div><CountryCard name={elem.name.common} population={elem.population} region={elem.region} capital={elem.capital[0]} flags={elem.flags.png}/></div>)}
          </div>
          :
          <p>Loading</p>
      }
    </div>
  );
}

export default App;
