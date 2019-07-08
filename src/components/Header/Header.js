import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const header = (props) => {
    let headerStyle = "navbar navbar-expand-lg navbar-light " + classes.Header;
    return (
        <nav className={headerStyle}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Hidden brand</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <NavLink to="/home" className="nav-link" activeClassName={classes.active}>
                    Home <span className="sr-only"> </span>
                </NavLink> 
            </li>
            <li className="nav-item" >
                <NavLink to='/login' className="nav-link" activeClassName={classes.active}>
                    Login
                </NavLink>  
            </li> 
            <li className="nav-item">
                <NavLink to='/register' className="nav-link" activeClassName={classes.active}>
                    Register
                </NavLink> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>  
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    );
}
export default header;