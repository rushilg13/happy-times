import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavbarLink.module.css';

export const NavbarLink = ({ to, content, icon }) => {
  return (
    <div className={classes.link}>
      <NavLink className={({isActive}) => (isActive ? 'active': '')} to={to}>
        <div>
          <i className={icon}></i>
          <h3>{content}</h3>
        </div>
      </NavLink>
    </div>
  );
};
