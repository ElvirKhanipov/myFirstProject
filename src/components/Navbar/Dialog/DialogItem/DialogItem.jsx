import React from 'react';
import classes from './../Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div >
            <NavLink to={path} activeClassName={classes.activeLink}> {props.image} {props.name} </NavLink>
        </div>
    )
}

export default DialogItem