import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Dashboard</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" id="link">Today</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="link">Week</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="link">Month</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;