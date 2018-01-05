import React from 'react';

const NavBar = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active">Today</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Week</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Month</a>
            </li>
        </ul>
    )
}

export default NavBar;