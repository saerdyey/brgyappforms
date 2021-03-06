import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/holyspirit-logo.png'
import './Nav.css';

const Nav = () => {
    return(
        <div id="navigation">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand" href="#" id="logo"><img src={logo} alt=""/>
                <span>Barangay Holy Spirit</span> 
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/brgyappforms"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Barangay
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/brgyappforms/general-info"><a class="dropdown-item">General Info</a></Link>
                        <Link to="/brgyappforms/history"><a class="dropdown-item">History</a></Link>
                        <Link to="/brgyappforms/maps"><a class="dropdown-item disabled">Maps</a></Link>
                        <a class="dropdown-item" href="#">Photo Album</a>
                        <Link to="/brgyappforms/forms"><a class="dropdown-item">Forms</a></Link>
                        <div class="dropdown-divider"></div>
                        <Link to="/brgyappforms/contact"><a class="dropdown-item" href="#">Contact Us</a></Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Government
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">What Department do I nedd?</a>
                        <a class="dropdown-item" href="#">Barangay Officials</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Associations</a>
                    </li>
                    </ul>
                    
                    
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                    
            </nav>
        </div>
    )
}

export default Nav;