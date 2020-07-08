import React from 'react';
import IconBar from '../IconBar';


function Animation() {
    window.scrollTo(0, 0);
    return (
        <>
            <IconBar />
            <section class="height-100 section animation-ban " data-stellar-background-ratio="0.5">
                <div class="bg-overlay"></div>
                <div class="container pos-vertical-center">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="home-one-content">
                                <h3 class="text-white m-0 m-t-5 typewriter">&nbsp; Animation</h3>
                                <p class="text-light font-bold text-uppercase">&nbsp; Animation is the other name of Imagination!</p>
                                <a href="/contact" class="button"><b>Get in Touch</b></a> <a href="tel:8917335035" class="button"><b>Call Now</b></a>

                                <p class="text-white">
                                    The only formula of telling great stories is by designing and animating characters that your audience can instantly connect to. Placing your little story in the customer's story-gap is the key to success. At Auromira, we create compelling animations, motion graphics and explainer videos that communicate complex messages effortlessly. Our passion lies in telling your story to the world in the most engaging and effective way possible.</p>


                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section class="section">
                <div class="container">
                    <div class="row port m-b-20">

                        <div class="portfolioContainer" style={{position: 'relative', height: '532px'}}>

                            <div class="col-sm-6 col-md-4 natural personal">
                                <div class="gal-detail thumb text-center">
                                    <iframe width="330" height="225" src="https://www.youtube.com/embed/eJfvDb78zrw" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 natural personal">
                                <div class="gal-detail thumb text-center">
                                    <iframe width="330" height="225" src="https://www.youtube.com/embed/jf_-KVs1zEc" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 natural personal">
                                <div class="gal-detail thumb text-center">
                                    <iframe width="330" height="225" src="https://www.youtube.com/embed/hf-E_F8On4k" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 natural personal">
                                <div class="gal-detail thumb text-center">
                                    <iframe width="330" height="225" src="https://www.youtube.com/embed/ooFlGJGM_-s" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Animation;