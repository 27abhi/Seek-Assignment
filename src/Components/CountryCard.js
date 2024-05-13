import React from 'react'
import './CountryCard.css'

const CountryCard = ({name, population, region, capital, flags}) => {
  return (
    <div className='CountryCardMain'>
        <img className='flagImage' src={flags}></img>
        <b><h2>{name}</h2></b> <br/>
        <b>Population:</b> {population}<br/>
        <b>Region:</b> {region}<br/>
        <b>Capital:</b> {capital}<br/><br/>
    </div>
  )
}

export default CountryCard