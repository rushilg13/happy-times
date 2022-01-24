import React from 'react';
import classes from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={classes.bar}>
      <i className="fas fa-search"></i>   
      <input type="text" placeholder="Search news according to keywords" />
    </div>
  )
}
