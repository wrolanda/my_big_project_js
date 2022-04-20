import classes from  './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src='https://st4.depositphotos.com/18664664/23958/v/450/depositphotos_239583254-stock-illustration-droid-icon-trendy-droid-logo.jpg'></img>

		<div className={classes.loginBlock}>
			{props.isAuth ? props.login
				: <NavLink to={"/login"}>Login</NavLink>
			}
		</div>
		</header>
	);
}

export default Header;