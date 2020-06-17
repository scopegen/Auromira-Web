import React from 'react';
import IconBar from '../IconBar';

function DigitalMarketing() {
    window.scrollTo(0, 0); 
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src ='js/lightbox-plus-jquery.min.js';
        script.async = false;
        document.head.appendChild(script)
      });
    return (
        <React.Fragment>
            <IconBar />
            <section className="height-100 section digital-img " data-stellar-background-ratio="0.5">
                <div className="bg-overlay"></div>
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="home-one-content">
                                <h3 className="text-white m-0 m-t-5 typewriter">&nbsp; Digital Marketing</h3>
                                <p className="text-light font-bold text-uppercase">&nbsp; Make an online presence, DIGI-FY and
                            DIGNYFY your brand with a leading Advertising and Branding Company in India</p>
                                <a href="contact.html" className="button"><b>Get in Touch</b></a> <a href="tel:8917335035"
                                    className="button"><b>Call Now</b></a>

                                <p className="text-white">Marketing Your Presence Is As Important As Creating Presence. Auromira
                                Entertainment is a leading Advertising and Branding Company in India that deals in providing
                                all round premium digital services and handles the challenges in digital marketing that
                            emerge in every business.</p>
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
                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box pulse">
                                <div className="feature-icon">
                                    <img alt="seo-icon" src="images/seo-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold"><a href="seo.html">Search engine optimization </a></h5>
                                <p className="text-muted">Get Your Brand’s Online Presence felt better with the best digital
                            marketing company in Bhubaneswar.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInUp animated">
                                <div className="features-box">
                                    <div className="feature-icon">
                                        <img alt="human-activity" src="images/human-activity.png" />
                                    </div>
                                    <h5 className="text-uppercase font-bold"><a href="social-media-management.html">Social media
                                    management</a></h5>
                                    <p className="text-muted">Rock Your Social Media and boost engagement with the best digital
                                marketing company in Bhubaneswar.</p>
                                </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="web-design-icon" src="images/web-design-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold"><a href="our-websites.html">Web design, Development </a>
                                </h5>
                                <p className="text-muted">Build world-className, fully customized and optimal websites with the best
                            digital marketing company in Odisha. </p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="cro-icon" src="images/cro-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold">Conversion rate optimization </h5>
                                <p className="text-muted">We, at Auromira Entertainment have the secret you’ve been looking for:
                            Conversion Rate Optimization. </p>
                            </div>
                        </div>


                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="content-dev-icon" src="images/content-dev-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold">Content Development and Management </h5>
                                <p className="text-muted">Add quality content and subsequently, adding value to your brand with the
                            best digital marketing company in Odisha. </p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="orm-icon" src="images/orm-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold">Online reputation management </h5>
                                <p className="text-muted">Repairing, building and managing what people talk about you brand, thus,
                            managing your Online Reputation. </p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="g-suite" src="images/g-suite.png" />
                                </div>
                                <h5 className="text-uppercase font-bold"> G Suite </h5>
                                <p className="text-muted">Simplify work space and simplify your lives with G Suite by the digital
                            marketing company in Odisha.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="bulk-sms" src="images/bulk-sms.png" />
                                </div>
                                <h5 className="text-uppercase font-bold"> Bulk SMS </h5>
                                <p className="text-muted">Create effortless SMS service and propagating your brand’s story with
                            Auromira Entertainment, the best in town. </p>
                            </div>
                        </div>

                        <div className="col-sm-4 wow fadeInDown animated">
                            <div className="features-box">
                                <div className="feature-icon">
                                    <img alt="server-icon" src="images/server-icon.png" />
                                </div>
                                <h5 className="text-uppercase font-bold">Server and Maintenance </h5>
                                <p className="text-muted">Providing proactive Server and Network Maintenance & Support for your
                            business’s better functionality.</p>
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
                        <h5 className="text-center mar-bot30 mar-top15"><a href="case_gupta.html">Gupta Distributors</a></h5>
                    </div>



                    <div className="col-sm-6 col-md-4">
                        <div className="gal-detail thumb text-center hover06 pad-mar0">
                            <a className="example-image-link" href="images/events/case3.jpg" data-lightbox="example-set">
                            </a>
                            <figure>
                                <a className="example-image-link" href="images/events/case3.jpg" data-lightbox="example-set">
                                    <img src="images/events/case3.jpg" className="thumb-img" /></a>

                            </figure>
                        </div>
                        <h5 className="text-center mar-bot30 mar-top15"><a href="case_wonderworld.html">Wonder World</a></h5>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="gal-detail thumb text-center hover06 pad-mar0">
                            <a className="example-image-link" href="images/events/case4.jpg" data-lightbox="example-set">
                            </a>
                            <figure><a className="example-image-link" href="images/events/case4.jpg" data-lightbox="example-set">
                                <img src="images/events/case4.jpg" className="thumb-img" /></a>

                            </figure>
                        </div>
                        <h5 className="text-center mar-bot30 mar-top15"> <a href="case_assotech.html">Assotech Pride</a></h5>
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
                            <img src="images/digital-marketing-msg.jpg" width="100%" />
                        </div>

                        <div className="col-md-6 wow fadeInRight animated mobile-top20">
                            <form className="widget-contact-form" action="#" role="form" method="post" noValidate="novalidate">
                                <div className="row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="username">Name</label>
                                        <input type="text" id="username" name="name" className="form-control"
                                            placeholder="Enter your Name" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="useremail">Email</label>
                                        <input type="email" id="useremail" name="email" className="form-control"
                                            placeholder="Enter your Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="subject">Your Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control"
                                            placeholder="Subject..." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usermsg">Message</label>
                                    <textarea name="message" rows="5" id="usermsg" className="form-control"
                                        placeholder="Enter your Message"></textarea>
                                </div>
                                <button className="btn btn-custom" type="submit" id="form-submit"><i
                                    className="fa fa-paper-plane"></i>&nbsp;Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}

export default DigitalMarketing;