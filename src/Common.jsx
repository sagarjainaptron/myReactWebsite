import React from 'react';
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>{props.name} <strong className="brand-name">Sagar Jain</strong></h1>
                        <h2 className="my-3">First major project for well understanding of using react framework</h2>
                        <div className="mt-3">
                            <NavLink  to={props.visit} className="btn btn-outline-primary">{props.btname}</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid" alt="pic" />
                    </div>
                </div>
                  
                </div>
            </div>
        </div>
        </section>
        </>
    );
}
export default Common;