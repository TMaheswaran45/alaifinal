import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class MainBanner extends Component {
    render() {
        return (
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-image">
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img
                                        src={require('../../static/images/sw-banner-1.jpg')}
                                        className="wow zoomIn"
                                        data-wow-delay="0.6s"
                                        alt="image"
                                    />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6"><br /><br /></div>
                        <div className="col-lg-6"><br /><br /></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <p>Our Team has a good mix of experience in AI, Machine Learning Algorithm and Training, App development on Android & Hybrid platforms, Business process modelling and Robotic Process Automation</p>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>App Development</h3>
                                    <ul><li>We have a small pool of app development experts (Android & Hybrid) who have developed some remarkable apps in the las few years</li></ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/appdev.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/modeltrain.jpeg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>AI & Machine Learning</h3>
                                    <ul>
                                        <li>Machine Learning - Modelling & Execution</li>
                                        <li>Data Labelling & Training</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>


                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>BPM</h3>
                                    <ul>
                                        <li>Work with out consultants to model your business process using tools like Lombardi. We have people with more than 8 years of expertise with lombardi</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/bpm.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/rpa.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>RPA</h3>
                                    <ul>
                                        <li>Work with our experts to automate your repetitive business process using RPA tools like BluePrism</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
