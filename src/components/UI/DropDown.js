import React, { useState } from 'react';
import classes from './DropDown.module.css';

const countries = ['USA', 'Australia', 'Russia', 'France', 'United Kingdom'];

export const DropDown = ({ handleSelectCountry }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [country, setCountry] = useState('India');

  const handleClick = countrySelected => {    
    countries.push(country);
    let index = countries.indexOf(countrySelected);
    if (index !== -1) {
      countries.splice(index, 1);
    }
    handleSelectCountry(countrySelected);
    setCountry(countrySelected);
  }

  return (
    <div className={classes.dropdown}>
      <div className={classes.display} onClick={() => setIsDropDown(!isDropDown)}>
        <p>{country}</p>
        <i className="fas fa-chevron-down"></i>
      </div>
      {isDropDown &&
        <ul>
          {countries.map((country, index) => <li key={index}><button onClick={() => {
            setIsDropDown(!isDropDown)
            handleClick(country)
          }}>{country}</button></li>)}
        </ul>
      }
    </div>
  )
}
