import React from 'react'

const FilterFunction = (actionType, searchWordOrRegion, countryData) => {       //  A generalised Filter function for both Search bar and Dropdown filtering
  let filteredCountryData=[]
  if(actionType=='search'){                                                     //  Search bar filtering case
    let length=searchWordOrRegion.length
    filteredCountryData = countryData.filter((elem)=>elem.name.common.substr(0, length)==searchWordOrRegion)
  
  }
  else{   
    if(searchWordOrRegion=='Default'){                                          //  Dropdown filtering when default value is selected
      filteredCountryData=countryData
    }
    else{                                                                       //  Dropdown filtering when a continent is selected
      filteredCountryData = countryData.filter((elem)=>elem.region==searchWordOrRegion)
    }
  }
  return (
    [...filteredCountryData]
  )
}

export default FilterFunction