import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>Smart Lockers</h1>
                                <p>Hi Tech lockers that open and close based on face recognition. Register up to 1000 users with a single installation. No more headaches with lost locker keys or pins</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../static/images/smartlocker.jpg')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>   
                            </div>
                        </div>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-lg-6"><br/><br/></div>
                        <div className="col-lg-6"><br/><br/></div>
                    </div>

                    <div className="row align-items-center">
                    <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>Biometric Access Control</h1>
                                <p>Hi Tech lockers that open and close based on face recognition. Register up to 1000 users with a single installation. No more headaches with lost locker keys or pins</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="repair-banner-image">
            
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../static/images/visitor.jpg')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>
                            </div>
                        </div>

                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6"><br/><br/></div>
                        <div className="col-lg-6"><br/><br/></div>
                    </div>


                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h1>Smart Lockers</h1>
                                <p>Hi Tech lockers that open and close based on face recognition. Register up to 1000 users with a single installation. No more headaches with lost locker keys or pins</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require('../../static/images/smartlocker.jpg')} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="image" 
                                    />
                                </ReactWOW>   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainBanner;
