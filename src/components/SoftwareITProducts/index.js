import IconBar from "../IconBar";
import React from 'react';

import { Link as Router } from 'react-router-dom';

function SoftwareITProducts() {
    window.scrollTo(0, 0); 
    return (
        <>
        <IconBar />
        <section className="height-100 section it-product-bg"  data-stellar-background-ratio="0.5">
            <div className="bg-overlay"></div>
            <div className="container pos-vertical-center">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="home-one-content">
                            <h3 className="text-white m-0 m-t-5 typewriter">&nbsp; SOFTWARE AND IT PRODUCTS</h3>
                            <p className="text-light font-bold text-uppercase">&nbsp; We Build Services To Minimize Work And Maximize Success.</p>
                            <a href="/contact" className="button"><b>Get in Touch</b></a> <a href="tel:8917335035" className="button"><b>Call Now</b></a>
                              <p className="text-white">Auromira Entertainment is the perfect destination for companies planning to promote business with Web Designing or other Software and IT Products.
Our Web Designing professionals are experts in analyzing, strategizing, developing and deploying the need of the simplest to the most complex Software and IT Solutions.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
    </section>
     <div className="container">	 
                <div className="inner-title  wow fadeInDown  animated mar-bot40">
                <h2 className="text-center mar-top44"><span>What We Do</span></h2>
       </div>
	</div>

 <section className="section event  event-about parallax eventbg" id="event">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 wow fadeInDown animated">
                        <div className="features-box pulse">
                            <div className="feature-icon">
                                <img src="images/app-icon.png" />
                            </div>
                            <h5 className="text-uppercase font-bold">Applications</h5>
                            <p className="text-muted">Designing and developing applications for smoother functionality of your business.</p>
                        </div>
                    </div>

                    <div className="col-sm-3 wow fadeInUp animated">
                        <div className="features-box">
                            <div className="feature-icon">
                                <img src="images/web-fundamental-icon.png" />
                            </div>
                            <h5 className="text-uppercase font-bold">Web Fundamentality</h5>
                            <p className="text-muted">Formulating user-friendly and smooth Web Fundamentals for your business requirements. </p>
                        </div>
                    </div>

                    <div className="col-sm-3 wow fadeInDown animated">
                        <div className="features-box">
                            <div className="feature-icon">
                                <img src="images/bulk-sms.png" />
                            </div>
                            <h5 className="text-uppercase font-bold">Bulk SMS</h5>
                            <p className="text-muted">Creating Bulk SMS and SMS blast services for mass and maximum reach of your products and services.</p>
                        </div>
                    </div>
					
					 <div className="col-sm-3 wow fadeInDown animated">
                        <div className="features-box">
                            <div className="feature-icon">
                                <img src="images/ivr-tollfree.png" />
                            </div>
                            <h5 className="text-uppercase font-bold">IVR and Toll Free </h5>
                            <p className="text-muted">Creating effortless IVR and Toll Free services for the easy access of your Brand’s products and services. </p>
                        </div>
                    </div>
				
                </div>               
            </div>
        </section>
		
		<div>
		<div className="inner-title  wow fadeInDown  animated">
                    <h2 className="text-center mar-top44"><span>Case Studies</span></h2>
       </div>
	   </div>

	<section className="section aboutbg">
            <div className="container">
			
              	         <div className="col-sm-6 col-md-4">
                            <div className="gal-detail thumb text-center hover06 pad-mar0">
							<a className="example-image-link" href="images/events/case1.jpg" data-lightbox="example-set"></a>
                               
						<figure>
							   <a className="example-image-link" href="images/events/case1.jpg" data-lightbox="example-set"> 
							   <img src="images/events/case1.jpg" className="thumb-img" /></a>
							                   
							</figure>
							
							</div>
							<h5 className="text-center mar-bot30 mar-top15"><Router to="/caseGupta">Gupta Distributors</Router></h5>
                        </div>

                         <div className="col-sm-6 col-md-4">
                            <div className="gal-detail thumb text-center hover06 pad-mar0">
							<a className="example-image-link" href="images/events/case3.jpg" data-lightbox="example-set">
                               </a>
                               <figure>
                                   <a className="example-image-link" href="images/events/case3.jpg" data-lightbox="example-set"> 
                                   <img src="images/events/case3.jpg" className="thumb-img" /></a>
                                                        
                            </figure></div>
							<h5 className="text-center mar-bot30 mar-top15"><Router to="/wonderworld">Wonder World</Router></h5>
                        </div>

                       <div className="col-sm-6 col-md-4">
                            <div className="gal-detail thumb text-center hover06 pad-mar0">
							<a className="example-image-link" href="images/events/case4.jpg" data-lightbox="example-set">
                               </a>
                               <figure><a className="example-image-link" href="images/events/case4.jpg" data-lightbox="example-set"> 
                               <img src="images/events/case4.jpg" className="thumb-img" /></a>
                                                      
                          </figure></div>
							<h5 className="text-center mar-bot30 mar-top15"> <Router to="/assotech">Assotech Pride</Router></h5>
                        </div>
                                      
                  </div>				
				</section>


<div className="container">
<div className="inner-title wow fadeInDown animated">
<h2 className="text-center mar-top44"><span>Let’s Begin A Conversation!</span></h2>
</div>
</div>


<section className="section event-message">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 wow fadeInLeft animated">
                   <img src="images/software-it-products-small.jpg" width="100%" /> 
                    </div>

                    <div className="col-md-6 wow fadeInRight animated mobile-top20">
                        <form className="widget-contact-form" action="#" role="form" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label for="username">Name</label>
                                    <input type="text" id="username" name="name" className="form-control" placeholder="Enter your Name"/>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label for="useremail">Email</label>
                                    <input type="email" id="useremail" name="email" className="form-control" placeholder="Enter your Email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-12">
                                    <label for="subject">Your Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="usermsg">Message</label>
                                <textarea name="message" rows="5" id="usermsg" className="form-control" placeholder="Enter your Message"></textarea>
                            </div>
                            <button className="btn btn-custom" type="submit" id="form-submit"><i className="fa fa-paper-plane"></i>&nbsp;Send message</button>
                        </form>
                    </div>
                </div>
            </div>
</section>
        </>
    );
}

export default SoftwareITProducts;