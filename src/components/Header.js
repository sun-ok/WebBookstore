import React from "react";
import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUserCircle,  } from '@fortawesome/free-solid-svg-icons';



const Header = () => (
    <div>
        <nav className="navbar navbar-expand-md primary-bg user-select-none">
            <a className="navbar-brand" href="#"><span className = "logo">B</span></a>

            <button className="navbar-toggler menu-btn-wrap" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon menu-btn"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto d-none d-md-flex">
                    <li className="nav-item dropdown navbar-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Categories
            </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown navbar-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Authors
            </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
                <div className="input-group search col-md-2 col-12 p-0" id="mainSearchGroup">
                    <input className="form-control border-right-0 shadow-none primary-bg" id="mainSearch" type="text" />
                    <div className="input-group-append">
                        <span className="input-group-text primary-text primary-bg" id="mainSearchIcon">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                        </span>
                    </div>
                </div>
                <ul className="navbar-nav mr-auto d-xs-flex d-md-none">
                    <li className="nav-item dropdown navbar-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Categories
            </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown navbar-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Authors
            </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                </ul>
                <div className="d-none d-md-block">
                    <div className="ml-3 d-inline-block">
                        <a href="#" className="menu-item-expanded"><FontAwesomeIcon icon={faShoppingCart} /></a>
                    </div>
                    <div className="ml-3 d-inline-block">
                        <a href="#" className="menu-item-expanded"><FontAwesomeIcon icon={faHeart}/></a>
                    </div>
                    <div className="ml-3 d-inline-block">
                        <a href="#" className="menu-item-expanded"><FontAwesomeIcon icon={faUserCircle}/></a>
                    </div>
                </div>
                <div className="d-md-none">
                    <div className="d-block my-2">
                        <a href="#" className="menu-item-collapsed"><FontAwesomeIcon icon={faShoppingCart} /><span> Shopping cart</span></a>
                    </div>
                    <div className="d-block my-2">
                        <a href="#" className="menu-item-collapsed p-1"><FontAwesomeIcon icon={faHeart}/><span> Wish list</span></a>
                    </div>
                    <div className="d-block my-2">
                        <a href="#" className="menu-item-collapsed p-1"><FontAwesomeIcon icon={faUserCircle}/><span> Account</span></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;