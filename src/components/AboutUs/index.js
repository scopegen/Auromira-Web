import React from 'react';
import IconBar from '../IconBar';
import { Link as Router } from 'react-router-dom';
function AboutUs() {
    window.scrollTo(0, 0); 
    return (
        <React.Fragment>
            <IconBar />
            <section class="height-100 section about-main-banner-bg " data-stellar-background-ratio="0.5">
                <div class="bg-overlay"></div>
                <div class="container pos-vertical-center">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="home-one-content">
                                <h3 class="text-white m-0 m-t-5 typewriter">&nbsp; About Us</h3>
                                <p class="text-light font-bold text-uppercase">&nbsp; We Let Your Brand Communicate In The Best Way Possible, Because A Brand That Speaks Well, Does Well!</p>
                                <Router to="/contact" className="button"><b>Get in Touch</b></Router> <a href="tel:8917335035"
                                    className="button"><b>Call Now</b></a>
                                </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="section bg-gray-light">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 wow fadeInLeft animated">
                            <div class="about-one-content">
                                <h3 class="font-bold">We are a Digital & Creative agency</h3>
                                <p class="text-muted font-15"><b>Auromira</b> is an award-winning firm that specialises in Digital Marketing, Branding, Events and Communication that goes well beyond simple, regular promotions.</p>

                                <div class="service-item">
                                    <i class="mdi mdi-adjust"></i>
                                    <div class="service-detail">
                                        <h4 class="font-primary font-600">Strategy</h4>
                                        <p class="text-muted">Planned, methodical, detailed; our strategy involves all of these and so much more, all in purview of the requirements of our clients and their approach.</p>
                                    </div>
                                </div>
                                <div class="service-item">
                                    <i class="mdi mdi-android-studio"></i>
                                    <div class="service-detail">
                                        <h4 class="font-primary font-600">Design</h4>
                                        <p class="text-muted">World-class experience and innovation - our design works in the same tandem. You get what you want with a twist, in all its originality at Auromira Films</p>
                                    </div>
                                </div>
                                <div class="service-item">
                                    <i class="mdi mdi-access-point-network"></i>
                                    <div class="service-detail">
                                        <h4 class="font-primary font-600">Technology</h4>
                                        <p class="text-muted">Top-notch, upgraded and enhanced, all to make your work appealing to all. Work with us and witness what magic technology puts back on the screen.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 col-md-offset-2 col-sm-6 wow fadeInRight animated">
                            <div class="features-img-one">
                                <br /><br /><br />
                                <img src="images/phone_one.png" class="img-responsive" alt="phone_one" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                            <div class="text-center about-one-content wow fadeInDown  animated">
                                <h3 class="font-bold">What We Do</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row home about">

                        <div class="col-sm-4 wow fadeInDown  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-mobile text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">UX DESIGN</h5>

                                <p class="text-muted">Your users would come back over and over again. We never let your product go out of sight or out of mind. Usability, accessibility and pleasure, you have it all put together.</p>
                            </div>
                        </div>

                        <div class="col-sm-4 wow fadeInUp  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-tools text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">GRAPHICS</h5>

                                <p class="text-muted">It does more than just make your work look appealing. We add more to the entire quality which can give you that extra edge.</p>
                            </div>
                        </div>

                        <div class="col-sm-4 wow fadeInDown  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-lightbulb text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">BRANDING</h5>
                                <p class="text-muted">You will have us put it all across town. And turn it into something more than just another name in the market. It’s an all-round approach that we take.</p>
                            </div>
                        </div>

                        <div class="col-sm-4 wow fadeInDown  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-clipboard text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">STATISTICS</h5>
                                <p class="text-muted">We put a lot of effort in design, as it’s the most important ingredient of
                               successful website.Sed ut perspiciatis unde omnis istet.</p>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeInUp  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-strategy text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">IDENTITY</h5>
                                <p class="text-muted">Not to compromise on who you are and definitely not on who we are. Your identity is more than us to just ours.</p>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeInUp  animated">
                            <div class="features-box">
                                <div class="feature-icon">
                                    <i class="icon-globe text-custom"></i>
                                </div>
                                <h5 class="text-uppercase font-bold">WEB & UI</h5>
                                <p class="text-muted">We have the best in the industry to make the whole experience worthwhile for the consumers. We are what you need to be out-of-the-box.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section bg-gray wow fadeInUp  animated">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                            <div class="text-center about-one-content">

                                <h3 class="font-bold">Interested in work with us?</h3>
                                <p class="text-muted font-15">Let’s build your project together. To get started, all you need to do is click this button and answer a few questions. Then we will get back to you within 24 hours.</p>
                                <a href="/contact"> <button type="submit" class="btn btn-custom m-t-20">Contact Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;