import classes from './Navbar.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import cn from "classnames";


const setActive = ({isActive}) => isActive ? classes.activeLink : '';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" className={setActive}>Profile</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to ="/news" className={setActive} >News</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/dialogs" className={setActive} >Messages</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to ="/music" className={setActive} >Music</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to ="/users" className={setActive} >Users</NavLink>
			</div>
			<div className={cn(classes.item, classes.settings)}>
				<NavLink to ="/settings" className={setActive} >Settings</NavLink>
			</div>
		</nav>
	)
};

export default Navbar;