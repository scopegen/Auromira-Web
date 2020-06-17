import React from 'react';
import IconBar from '../IconBar';

function HelpSupport() {

    window.scrollTo(0, 0); 
    return (
        <>
            <IconBar/>
            <section class="page-header-box section help-support-bg parallax" data-stellar-background-ratio="0.5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="title-box">
                                <h3 class="text-white m-b-0">Help & Support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section martop50 digital-aboutbg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 wow fadeInLeft   animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
                            <img src="images/help-support.jpg" style={{width:'100%'}} />
                        </div>

                        <div class="col-sm-6 wow fadeInRight  animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
                            <div class="about-one-content inner-title">
                                <h2>Help <br /> <span>& Support</span></h2>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                            when an unknown printer took.</p>

                                <p>A galley of type and scrambled it to make a type specimen book.
                                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HelpSupport;