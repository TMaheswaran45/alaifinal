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
                                    src={require('../../static/images/port-banner-1.jpg')}
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
     
                            <p>At ALAI Labs, we believe in providing ingenious solutions that work even in remote areas with below par infrastructure and connectivity. </p>
                            <p>Our AI Solution involving high-resolution camera with deep learning VPUs and LoRa based wireless module is used for object classification/detection,movable asset tracking, controlling utilities and event monitoring. The information gathered is procedded onboard and pushed to cloud for generating detailed insights, analysis and data visualization</p>
                            <p>Our solutions have been received very well and have already stated resulting in productivity improvements and cost savings</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="repair-banner-image">
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img
                                    src={require('../../static/images/cranes.jpg')}
                                    className="wow zoomIn"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="repair-banner-content">
                            <h3>Add Intelligence to existing systems (Cranes)</h3>
                            <ul>
                                <li>3 Point data collection</li>
                                <li>Thorough data acquisition & IOT systems</li>
                                <li>Productive move / ideal time & Predictive maintenance</li>
                                <li>Solving interoperability issues with common platform.</li>
                                <li>Tail end data collection.</li>
                            </ul>
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
                            <h3>Tracking</h3>
                            <ul>
                            <li>Container / Truck movement analysis /Routing history</li>
                            <li>Roadway congestion monitoring</li>
                            <li>Statistics on truck arrivals, truck waiting and flow at terminal</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="repair-banner-image">
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img
                                    src={require('../../static/images/port-truck.gif')}
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
                                    src={require('../../static/images/analytics.png')}
                                    className="wow zoomIn"
                                    data-wow-delay="0.6s"
                                    alt="image"
                                />
                            </ReactWOW>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="repair-banner-content">
                            <h3>Analytics</h3>
                            <ul>
                            <li>Save fuel and time through improved routing and data collection.</li>
                            <li>Microscopic and macroscopic modelling for cargo handling.</li>
                            <li>KPI dashboard for Terminal Operators abstracting the technology and jargons (AI & Machine Learning).</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default MainBanner;
