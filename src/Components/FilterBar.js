import React from 'react'
import './FilterBar.css'
import FilterFunction from '../FilterFunction'

const FilterBar = (props) => {
    const handleChange=(e)=>{                         //  Event function for searchbar filtering
      props.setSearchWord(e.target.value)
      props.filterFuncForCountryData(FilterFunction('search', e.target.value, props.CountryData))
    }
    const handleSelect = (e) =>{                      //  Event function for dropdown filtering
      props.setGroupByContinent(true)
      props.filterFuncForCountryData(FilterFunction('filter',e.target.value, props.CountryData))
    }
  return (
    <div className='FilterBarMain'>
        <span >
            <input className='searchBar' placeholder='Type to search a country' onChange={(e)=>handleChange(e)}></input>
        </span>
        <span>
            <select className='filterDropdown' placeholder='search country' onChange={(e)=>handleSelect(e)}>
            <option value={'Default'}>Filter by region</option>
              <option value={'Asia'}>Asia</option>
              <option value={'Europe'}>Europe</option>
              <option value={'Americas'}>Americas</option>
              <option value={'Oceania'}>Oceania</option>
            </select>
        </span>
    </div>
  )
}

export default FilterBar