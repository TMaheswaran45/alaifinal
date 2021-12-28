import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <div className="ml-main-banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <h1>NextGen Solutions for a connected world</h1>
                            <p>&nbsp;</p>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="ml-banner-single-image">
                                <ReactWOW delay='0.5s' animation='fadeInUp'>
                                    <img src={require("../../static/images/web-banner-new.png")} className="wow fadeInUp" data-wow-delay="0.5s" alt="image" />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="animate-border">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainBanner;
