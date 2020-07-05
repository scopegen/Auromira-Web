import React from 'react';
import { Link as Router } from 'react-router-dom';
import NavLink from "../../utils/navLink";

function Header() {
    return (
        <>
            <header id="topnav" className="defaultscroll">
                <div className="container">
                    {/* <!-- Logo container--> */}
                    <div>
                        <Router to="/" className="logo">
                            <img src="images/logo_w.png" alt="" className="logo-light" height="26" />
                            <img src="images/logo.png" alt="" className="logo-dark" height="24" />
                        </Router>
                    </div>
                    {/* <!-- End Logo container--> */}
                    <div className="menu-extras">

                        <div className="menu-item">
                            {/* <!-- Mobile menu toggle--> */}
                            <a className="navbar-toggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            {/* <!-- End mobile menu toggle--> */}
                        </div>
                    </div>

                    <div id="navigation">
                        {/* <!-- Navigation Menu--> */}
                        <ul className="navigation-menu">

                            <li className="">
                                <NavLink to="/"  className="navMenuItem">Home</NavLink>
                            </li>

                            <li className="">
                                <NavLink to="/aboutus"  className="navMenuItem">About Us</NavLink>
                            </li>

                            <li className="has-submenu">
                                <a href="#">Services</a>
                                <ul className="submenu">

                                    <li>
                                        <NavLink to="/digitalmarketing"  className="navMenuItem">Digital Marketing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/audiovisualphotography"  className="navMenuItem">Audio Visual and photography</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/promotion"  className="navMenuItem">Promotion</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/staticbranding"  className="navMenuItem">Static Branding</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/hoarding"  className="navMenuItem">Hoarding</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/printingcollaterals"  className="navMenuItem">Printing and Collaterals</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/softwareitProducts"  className="navMenuItem">Software and IT Products</NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="/eventmanagment"  className="navMenuItem">Event Management Services</NavLink>
                                    </li>

                                    {/* <!--<li>
                                    <a href="design-consultation.html">Designs and Consultation</a>
                                </li>--> */}
                                </ul>
                            </li>

                            <li>
                                <Router to="/campaigns"  className="navMenuItem">Campaigns</Router>
                            </li>

                            <li className="has-submenu">
                                <a href="#">Multimedia</a>
                                <ul className="submenu">

                                    <li>
                                        <NavLink to="/videos" className="navMenuItem"><i className="mdi mdi-auto-fix"></i>Videos</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/photography"  className="navMenuItem"><i className="mdi mdi-checkbox-multiple-blank-outline"></i>Photography</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/animation"  className="navMenuItem"><i className="mdi mdi-alert"></i>Animation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/design"  className="navMenuItem"><i className="mdi mdi-album"></i>Design</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="">
                                <a href="https://www.auromirafilms.com/blog/">Blog</a>
                            </li>

                            <li>
                                <NavLink to="/contact"  className="navMenuItem">Contact</NavLink>
                            </li>

                        </ul>
                        {/* <!-- End navigation menu --> */}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;