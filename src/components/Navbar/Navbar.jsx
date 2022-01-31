import classes from './Navbar.module.css';
import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<Link to="/profile">Profile</Link>
			</div>
			<div className={`${classes.item} ${classes.active}`}>
				<Link to="/dialogs">Messages</Link>
			</div>
			<div className={classes.item}>
				<Link to ="/news">News</Link>
			</div>
			<div className={classes.item}>
				<Link to ="/music">Music</Link>
			</div>
			<div className={classes.item}>
				<Link to ="/settings">Settings</Link>
			</div>
		</nav>
	);
}

export default Navbar;