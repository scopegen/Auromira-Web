import React from 'react';
import IconBar from '../IconBar';

function Career() {

    window.scrollTo(0, 0); 
    return (
        <>
            <IconBar/>
            <section className="page-header-box section career-bg parallax"  data-stellar-background-ratio="0.5" style={{backgroundPosition: '0% 1px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                    <div className="title-box">
                            {/* <h3 className="text-white m-b-0"><!--Career-->&nbsp;</h3> */}
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
		
		
	<section className="section martop50">
            <div className="container">
                <div className="row career">				
				  <div className="col-sm-12 wow fadeInLeft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
                   <ul>
        <li>
		<div className="row ">
		<div className="col-sm-6">Frontend Developer (1 nos)
		</div>
		<div className="col-sm-6 text-right"><span>Post Date :  31th Dec 2019</span></div>
		</div>
		
		
		</li>
		
		 <li><div className="row ">
		<div className="col-sm-6"> PHP Developer (1 nos)
		</div>
		<div className="col-sm-6 text-right"><span>Post Date :  31th Dec 2019</span></div>
		</div>
		 
		</li>
		 
		  <li>
		  <div className="row ">
		<div className="col-sm-6"> Graphic Designer (1 nos)
		</div>
		<div className="col-sm-6 text-right"><span>Post Date :  31th Dec 2019</span></div>
		</div>
		  
		  </li>
		  
		   <li>
		    <div className="row ">
		<div className="col-sm-6"> SEO Executive (1 nos)
		</div>
		<div className="col-sm-6 text-right"><span>Post Date :  31th Dec 2019</span></div>
		</div>
	   
		   </li>
		   
		   <li className="text-center">
		   Send your CV to <a href="mailto:hr@auromirafilms.com">hr@auromirafilms.com</a>
		   </li>

                  </ul>				   
					   
					   
                    </div>				                    
                </div> 		
            </div> 
        </section>
        </>
    );
}

export default Career;