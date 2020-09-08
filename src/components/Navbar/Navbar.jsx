import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
<nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' activeClassName={classes.activeLink}>
            My Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/friends' activeClassName={classes.activeLink}>
            Friends
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs' activeClassName={classes.activeLink}>
            Messeges
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/photos' activeClassName={classes.activeLink}>
            Photos
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news' activeClassName={classes.activeLink}>
            News
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings' activeClassName={classes.activeLink}>
            Settings
          </NavLink>
        </div>
      </nav>)
}

export default Navbar