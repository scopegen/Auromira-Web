import React from 'react';
import { Link as Router } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <footer className="section-md bg-dark footer-one p-b-0">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 p-b-40 wow fadeInDown  animated">
                            <img src="images/logo_w.png" alt="logo" height="30" />
                            <p className="text-light about-text font-14 m-t-10">We Are A Target Driven Multimedia & Entertainment Agency Based In The Temple City, Bhubaneswar With A Proven Excellence In Marketing, Advertising, Films and Entertainment.</p>
                        </div>

                        <div className="col-md-2 col-sm-6 p-b-40 wow fadeInUp  animated">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                            <li> <Router to="/aboutus">About Us</Router></li>
                                <li><Router to="/campaigns">Campaigns</Router></li>
                                <li><Router to="/videos">Videos</Router> </li>

                                <li><Router to="/photography">Photography</Router></li>

                                <li><Router to="/animation">Animation</Router></li>

                                <li><Router to="/design">Design</Router></li>


                                {/* <!--<li><a href="#">Media</a></li>--> */}
                                <li><Router to="/career">Career</Router></li>
                                <li><a href="https://www.auromirafilms.com/blog/">Blog</a></li>

                                <li><Router to="/helpSupport">Help & Support</Router></li>
                                <li><Router to="/helpSupport">Privacy Policy</Router></li>
                                <li><Router to="/termsConditions">Terms & Conditions</Router></li>

                            </ul>
                        </div>

                        <div className="col-md-2 col-sm-6 p-b-40 wow fadeInDown  animated">
                            <h5>Services</h5>
                            <ul className="list-unstyled">


                                <li>
                                <Router to="/digitalmarketing">Digital Marketing</Router>
                                </li>
                                <li>
                                <Router to="/audiovisualphotography">Audio Visual and photography</Router>
                                </li>
                                <li>
                                    <Router to="/audiovisualphotography">Promotion</Router>
                                </li>

                                <li>
                                <Router to="/staticbranding">Static Branding</Router>
                                </li>
                                <li>
                                <Router to="/hoarding">Hoarding</Router>
                                </li>
                                <li>
                                <Router to="/printingcollaterals">Printing and Collaterals</Router>
                                </li>

                                <li>
                                <Router to="/softwareitproducts">Software and IT Products</Router>
                                </li>

                                <li>
                                <Router to="/eventmanagment">Event Management Services</Router>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-sm-6 wow fadeInDown  animated">
                            <div className="p-b-40 footer-map">
                                <h5>Contact us</h5>
                                <ul className="list-unstyled">
                                    <div itemScope itemType="http://schema.org/LocalBusiness">
                                        <a itemProp="url" href="https://www.auromirafilms.com/"><div itemProp="name"><strong>Auromira Films</strong></div>
                                        </a>
                                        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                            <strong>Address : </strong><br /><span itemProp="streetAddress">316, 3RD FLOOR, DISTRICT CENTRE, CHANDRASEKHARPUR, BHUBANESWAR</span>,<br />
                                            <span itemProp="addressRegion">ODISHA</span> -
<span itemProp="postalCode">751016</span><br />
                                            <span itemProp="addressCountry">India</span>.<br />
                                        </div>
                                        <strong>Tel : </strong><span itemProp="telephone"><a href="tel:9437112174, 8917335035, 8249945095">9437112174, 8917335035, 8249945095</a></span><br />
                                        <strong>Email : </strong><span itemProp="email"><a href="mailto:DEV@AUROMIRAFILMS.COM">abinash@auromirafilms.com, dev@auromirafilms.com</a></span><br />
                                    </div>
                                    <li><strong className="font-secondary font-14">Monday - Saturday: </strong>09:00 a.m.- 06:00 p.m.</li>
                                    <li><strong className="font-secondary font-14">Sunday: </strong>Closed
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}

                <div className="footer-one-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 wow fadeInLeft animated">
                                <p className="m-b-0 font-13 copyright">© 2020 Auromira Films.</p>
                            </div>
                            <div className="col-sm-7 wow fadeInRight animated">

                                <ul className="list-inline footer-social-one m-b-0 pull-right">

                                    <li><a href="https://www.facebook.com/auromirafilms/" target="_blank" rel="noopener noreferrer" ><i className="mdi mdi-facebook"></i></a></li>
                                    <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/auromirafilms/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/auromiraentertainment/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-instagram"></i></a></li>

                                </ul>
                            </div>
                        </div> {/* <!-- end row --> */}
                    </div> {/*  end container */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;