import React from 'react';
import { NavbarLink } from '../UI/NavbarLink';

import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.header}>
                <h2>News App</h2>
            </div>
            <div className={classes.categories}>
                <ul>
                    <li>
                        <NavbarLink to="/" icon="fas fa-home" content="Home" />    
                    </li>
                    <li>
                        <NavbarLink to="/general" icon="fas fa-globe" content="General" />    
                    </li>
                    <li>
                        <NavbarLink to="/business" icon="fas fa-briefcase" content="Business" />    
                    </li>
                    <li>
                        <NavbarLink to="/entertainment" icon="fas fa-play-circle" content="Entertainment" />    
                    </li>
                    <li>
                        <NavbarLink to="/sports" icon="fas fa-futbol" content="Sports" />    
                    </li>
                    <li>
                        <NavbarLink to="/health" icon="fas fa-medkit" content="Health" />    
                    </li>
                    <li>
                        <NavbarLink to="/science" icon="fas fa-atom" content="Science" />    
                    </li>
                    <li>
                        <NavbarLink to="/technology" icon="fas fa-lightbulb" content="Technology" />    
                    </li>

                </ul>
            </div>
        </div>
    )
}
