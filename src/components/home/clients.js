import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/clients.css';

const Clients = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2500, min: 1024},
            items: 6
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 768, min: 540 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 540, min: 0 },
            items: 2
        }
    };
    return (
        <Carousel
            showDots={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            arrows={props.arrows}
            dotListClass="custom-dot-list-style"
            renderDotsOutside={true}
            itemClass="carousel-item-padding-10-px">
            <img src="images/clients/seal_of_Odisha.png" alt="logo" className="img-responsive" />
            <img src="images/clients/skill_india.png" alt="logo" className="img-responsive" />
            <img src="images/clients/NALCO-Logo.jpg" alt="logo" className="img-responsive" />
            <img src="images/clients/brand-2.jpg" alt="logo" className="img-responsive" />
            <img src="images/clients/brand-1.jpg" alt="logo" className="img-responsive" />
            <img src="images/clients/brand-4.jpg" alt="logo" className="img-responsive" />
            <img src="images/clients/brand-5.jpg" alt="logo" className="img-responsive" />
            <img src="images/clients/brand-6.jpg" alt="logo" className="img-responsive" />
        </Carousel>
    );
}

export default Clients;