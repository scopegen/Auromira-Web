import React from 'react';
import Isotope from 'isotope-layout';
import './itemGridFilter.css';
import NavLink from "../../utils/navLink";
import { Link as Router } from 'react-router-dom';
const ItemGridFilter = () => {
    // store the isotope object in one state
    const [isotope, setIsotope] = React.useState(null);
    // store the filter keyword in another state
    const [filterKey, setFilterKey] = React.useState("*");
  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      setIsotope(
        new Isotope(".portfolioContainer", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows"
        })
      );
      if(isotope)
      isotope.arrange({ filter: `*` }) 
    }, []);
  
    // handling filter key change
    React.useEffect(
      () => {
        if (isotope) {
          filterKey === "*"
            ? isotope.arrange({ filter: `*` })
            : isotope.arrange({ filter: `.${filterKey}` });
        }
      },
      [isotope, filterKey]
    );
  
    return (
      <>
        {/* <ul>
          <li onClick={() => setFilterKey("*")}>Show Both</li>
          <li onClick={() => setFilterKey("vege")}>Show Veges</li>
          <li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
        </ul> */}

            <div className="row m-b-30 m-t-40">
                <div className="col-sm-12">
                    <div className="portfolioFilter text-center">
                        <div onClick={() => setFilterKey("*")} className={filterKey === "*" ? 'current' : ''} >Designing</div>
                        <div onClick={() => setFilterKey("videos")} className={filterKey === "videos" ? 'current' : ''}>Logo</div>
                        <div onClick={() => setFilterKey("photography")} className={filterKey === "photography" ? 'current' : ''}>Mock-Ups</div>
                        <div onClick={() => setFilterKey("animation")} className={filterKey === "animation" ? 'current' : ''}>Business Cards</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="portfolioContainer row">
                    <div className="col-md-4 col-sm-6 filter-item videos">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                {/* <div className="portfolio-masonry-img"> */}
                                    <img src="images/home-products/3C_20international.jpg" className="thumb-img" alt="work-thumbnail" />
                                {/* </div> */}
                                <div className="portfolio-masonry-detail">
                                    <h4>3C international</h4>
                                    <p>Logo Design</p>
                                </div>
                            </div>
                       </Router>
                    </div>
                    <div className="col-md-4 col-sm-6 filter-item animation">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                <div className="portfolio-masonry-img">
                                    <img src="images/home-products/ALBA_card.jpg" className="thumb-img" alt="work-thumbnail" />
                                </div>
                                <div className="portfolio-masonry-detail">
                                    <h4>Alba Gifting</h4>
                                    <p>Card Design</p>
                                </div>
                            </div>
                      </Router>
                    </div>
                    <div className="col-md-4 col-sm-6 filter-item design">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                <div className="portfolio-masonry-img">
                                    <img src="images/home-products/estetica.jpg" className="thumb-img" alt="work-thumbnail" />
                                </div>
                                <div className="portfolio-masonry-detail">
                                    <h4>Estetica</h4>
                                    <p>Bag Design</p>
                                </div>
                            </div>
                       </Router>
                    </div>
                    <div className="col-md-4 col-sm-6 filter-item design">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                <div className="portfolio-masonry-img">
                                    <img src="images/home-products/LPR.jpg" className="thumb-img" alt="work-thumbnail" />
                                </div>
                                <div className="portfolio-masonry-detail">
                                    <h4>LPR</h4>
                                    <p>Logo Design</p>
                                </div>
                            </div>
                       </Router>
                    </div>
                    <div className=" col-md-4 col-sm-6 filter-item videos">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                <div className="portfolio-masonry-img">
                                    <img src="images/home-products/Orimark.jpg" className="thumb-img" alt="work-thumbnail" />
                                </div>
                                <div className="portfolio-masonry-detail">
                                    <h4>Orimark</h4>
                                    <p>Logo Design</p>
                                </div>
                            </div>
                      </Router>
                    </div>

                    <div className="col-md-4 col-sm-6 creative filter-item photography">
                    <Router to="/design">
                            <div className="portfolio-masonry-box">
                                <div className="portfolio-masonry-img">
                                    <img src="images/home-products/urbanyatra.jpg" className="thumb-img" alt="work-thumbnail" />
                                </div>
                                <div className="portfolio-masonry-detail">
                                    <h4>Urbanyatra</h4>
                                    <p>Creative Design</p>
                                </div>
                            </div>
                      </Router>
                    </div>
                </div>
            </div>
            <NavLink to="/design" className="button btn-loadmore">
                <b>MORE WORKS</b>
            </NavLink>
      </>
    );
  };
  
  export default ItemGridFilter;
  