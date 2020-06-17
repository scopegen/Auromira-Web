import React from 'react';
import IconBar from '../IconBar';

function Contact() {
    window.scrollTo(0, 0); 
    return (
        <>
        <IconBar />
            <section className="height-100 section contact-banner "  data-stellar-background-ratio="0.5">
            <div className="bg-overlay"></div>
            <div className="container pos-vertical-center">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="home-one-content">
                            <h3 className="text-white m-0 m-t-5 typewriter">&nbsp; Contact Us</h3>
                            <p className="text-light font-bold text-uppercase">&nbsp; Every great story begins with a little chat, blooms with some calls and strengthens with many meet-ups. Shall we begin ours?</p>
                            <a href="#" className="button"><b>Get in Touch</b></a> <a href="tel:8917335035" className="button"><b>Call Now</b></a>
                        </div>
                    </div>
                </div>
            </div>
            
    </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-uppercase m-t-0 m-b-20">Get In Touch</h4>
                        <p className="text-muted">Let’s Get Connected To Begin An Amazing Story Together!</p>
                        <p className="text-black"><strong> MUMBAI | VIZAG | DELHI | BHUBANESWAR</strong></p>
                        <div className="row">
                            <div className="col-md-6 ">
                                <h4 className="font-italic">Corporate Office</h4>
                                <div itemscope itemtype="http://schema.org/LocalBusiness">
<a itemprop="url" href="https://www.auromirafilms.com/"><div itemprop="name"><strong>Auromira Entertainment Pvt Ltd.</strong></div>
</a>
<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<span itemprop="streetAddress">316, 3RD FLOOR, DISTRICT CENTRE, CHANDRASEKHARPUR, BBSR - 16</span>,<br/>
<span itemprop="addressRegion">Odisha</span> - 
<span itemprop="postalCode">751016</span><br/>
<span itemprop="addressCountry">India</span>.<br/>
</div>
<strong>Tel : </strong><span itemprop="telephone"><a href="tel:8917335035, 7735353282">7735353282, 8917335035,  7064346258</a></span><br/>
<strong>Email : </strong><span itemprop="email"><a href="mailto:DEV@AUROMIRAFILMS.COM">abinash@auromirafilms.com, dev@auromirafilms.com</a></span><br/>
</div>
                            </div>
                             
                        </div>
                    </div>

                    <div className="col-md-6">
                        <form className="widget-contact-form" action="#" role="form" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label for="username">Name</label>
                                    <input type="text" id="username" name="name" className="form-control" placeholder="Enter your Name"/>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label for="useremail">Email</label>
                                    <input type="email" id="useremail" name="email" className="form-control" placeholder="Enter your Email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-12">
                                    <label for="subject">Your Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject..."/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="usermsg">Message</label>
                                <textarea name="message" rows="5" id="usermsg"
                                          className="form-control" placeholder="Enter your Message"></textarea>
                            </div>
                            <button className="btn btn-custom" type="submit" id="form-submit"><i className="fa fa-paper-plane"></i>&nbsp;Send message</button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
		
		<section className="mapc">
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-12 contact-map map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14965.52354903348!2d85.8184162!3d20.3258779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d91befe3b6d4e19!2sAuromira%20Entertainment!5e0!3m2!1sen!2sin!4v1570259570530!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
                    </div>
                </div> 
            </div> 
        </section>

        <section className="section bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="text-center about-one-content">
                            <h3 className="font-bold">Interested in working with us?</h3>
                            <p className="text-muted font-15">Let’s build your project together.
To get started, all you need to do is click this button
and answer a few questions. Then we will get
back to you within 24 hours.</p>
                             
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;