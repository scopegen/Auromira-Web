import React from 'react';
import Clients from "./clients";
import { Link as Router } from 'react-router-dom';
import $ from 'jquery';
import IconBar from '../IconBar';
import ItemGridFilter from '../ItemGridFilter';

const Home = () => {

  window.scrollTo(0, 0);

  React.useEffect(() => {

    $('.ytvideo[data-video]').one('click', function () {
      var $this = $(this);
      $this.html('<iframe src="https://www.youtube.com/embed/1N0jqHMVWJo?autoplay=1' + $this.data("video") + '?autoplay=0"></iframe>');
    });
  });

  return (
    <>
      <section className="height-100 section bg-img-1 banner-video" data-stellar-background-ratio="0.5" style={{ backgroundPosition: '0% 0px' }}>

        <IconBar />

        <video autoPlay="" muted="" loop="" id="bannerVideo" >
          {/* <!-- <source src="videos/banner-video.mp4" type="video/mp4">
              Your browser does not support HTML5 video.--> */}
        </video>
        <div className="bg-overlay"></div>
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="home-one-content">
                <h3 className="text-white m-0 m-t-5">The Story of Your Brand</h3>
                <p className="text-light font-bold text-uppercase">AUROMIRA = DIGITAL MARKETING + DESIGN + ENTERTAINMENT + EVENTS + AWESOME PROMOTIONS</p>
                <Router to="/aboutus"  className="button" to="/contact">
                  <b>Get in Touch</b>
                </Router>
                <a href="tel:8917335035" className="button"><b>Call Now</b></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse-wrapper">
          <div className="mouse">
            <div className="mouse-scroll"></div>
          </div>
        </div>
      </section>

      <section className="section aboutbg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wow fadeInLeft animated">
              <div className="about-one-content">
                <h2 className="font-bold">
                  &nbsp;ABOUT <br /> <span>AUROMIRA</span>
                </h2>
                <p className="text-muted font-15">
                  <b>
                    Auromira Entertainment Pvt Ltd. is an integrated
                    communications and marketing agency, known for its
                    world-className marketing campaigns, creative designs and
                    client-centric business practices. As an award-winning
                    agency, we are continuously disrupting the regular
                    marketing tactics with innovative strategies and effective
                    brand mobilization campaigns in advertising and event
                    management.
                    </b>
                </p>
                <p className="text-muted font-15">
                  With our leads and revenue based approach, we have helped
                  our clients achieve their objectives efficiently. We work
                  with our XI based insights so that the campaign is backed by
                  solid digital and on-ground data.
                  </p>
                <p className="text-muted font-15"></p>
              </div>
              <Router to="/aboutus" className="button">
                <b>KNOW MORE</b>
              </Router>
            </div>

            <div className="col-sm-6 wow fadeInRight animated">
              <section className="video">
                <div className="ytvideo" data-video="7ixLP6mUqnw">
                  <div className="seo">
                    Have a meaningful description of the video here
                    </div>
                  <span className="playbutton"></span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="section home">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="text-center about-one-content  wow fadeInLeft animated">
                <h3 className="font-bold font-24">What We Do</h3>
                <p className="text-muted font-15"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-6 wow fadeInRight animated">
              <a href="digital-marketing.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster1.jpg"
                      src="images/services/poster1.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Digital Marketing Services
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInLeft animated">
              <a href="audio-visual-photography.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster2.jpg"
                      src="images/services/poster2.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Audio Visual and photography
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInRight animated">
              <a href="promotion.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster3.jpg"
                      src="images/services/poster3.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Promotion
                    </h5>
                  <p className="text-muted font-16"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInRight animated">
              <a href="static-branding.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster4.jpg"
                      src="images/services/poster4.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Static Branding
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInLeft animated">
              <a href="hoarding.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster5.jpg"
                      src="images/services/poster5.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Hoarding
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInRight animated">
              <a href="printing-collaterals.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster6.jpg"
                      src="images/services/poster6.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Printing and Collaterals
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInLeft animated">
              <a href="software-it-products.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster7.jpg"
                      src="images/services/poster7.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Software and IT Products
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>

            <div className="col-sm-3 col-xs-6 wow fadeInLeft animated">
              <a href="events.html">
                <div className="features-box hover06">
                  <figure>
                    <img
                      alt="poster8.jpg"
                      src="images/services/poster8.jpg"
                    />
                  </figure>
                  <h5 className="text-uppercase font-bold font-16">
                    Event Management Services
                    </h5>
                  <p className="text-muted font-15"> </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-img-2 video-background section">
        <video autoPlay muted loop id="myVideo">
          <source src="videos/banner-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-3 facts wow fadeInLeft  animated">
              <h1 className="text-white m-t-10">
                <span className="counter">516</span>{" "}
              </h1>
              <h4 className="text-white font-16 text-uppercase font-bold m-t-20">
                Projects Ordered
                </h4>
            </div>
            <div className="col-sm-3 facts wow fadeInRight animated">
              <h1 className="text-white m-t-10">
                <span className="counter">478</span> +
                </h1>
              <h4 className="text-white font-16 text-uppercase font-bold m-t-20">
                Happy Clients
                </h4>
            </div>
            <div className="col-sm-3 facts wow fadeInLeft animated">
              <h1 className="counter text-white m-t-10">501</h1>
              <h4 className="text-white font-16 text-uppercase font-bold m-t-20">
                Projects Completed
                </h4>
            </div>
            <div className="col-sm-3 facts wow fadeInRight animated">
              <h1 className="counter text-white m-t-10">458</h1>
              <h4 className="text-white font-16 text-uppercase font-bold m-t-20">
                Comments Reserved
                </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="text-center about-one-content">
              <h3 className="font-bold m-t-10">Our Recent Works</h3>
            </div>
          </div>
          <ItemGridFilter />
        </div>
      </section>
      <section className="section clients_logos">
        <div className="container">
          <Clients deviceType="desktop" arrows={false} />

          <div className="wow fadeInLeft  animated">
            <h3 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;