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
     
                            <p>At ALAI Labs, we thrive on bringing Artificial Intelligence (AI) to remote areas and applications with low infrastructure and connectivity. </p>
                            <p>Our AI Solution based on high-speed cognitive vision, with on board Deep learning VPU’s, for real-time processing and enabled with a very low power long-range wireless module for connectivity with the cloud. Our Deep learning camera can be trained to perform any vision-based classification task for continuous monitoring and instant pattern notification on pre-defined events; the inference data pushed to the cloud were ALAI back end Machine Learning stack further process and enable data visualization.</p>
                            <p>Our proven Solution: We enable (Container terminals) ports to create data and bring intelligence to it, with our Deep learning and connected vision system. Our IoT platform and vision system help ports to track movable assets inside the container terminal by collecting movement data to improve productivity. We strongly believe with our proven Edge-AI and IOT ML platform, we can offer data collection for any tracking system.</p>
                            <p>We are a group of researchers with Industrial background working on a common interest. We are based in Singapore, and we do have a development centre in Chennai as well. Our focus is on providing an optics-based (Vision) AI solution on edge.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
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
                    <div className="col-lg-6">
                        <div className="repair-banner-content">
                            <h2>Add Intelligence to existing systems (Cranes)</h2>
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
                            <h2>Tracking</h2>
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
                    <div className="col-lg-6"><br /><br /></div>
                    <div className="col-lg-6"><br /><br /></div>
                </div>

                <div className="row align-items-center">
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
                    <div className="col-lg-6">
                        <div className="repair-banner-content">
                            <h2>Analytics</h2>
                            <ul>
                            <li>Save fuel and time through improved routing and data collection.</li>
                            <li>SMicroscopic and macroscopic modelling for cargo handling.</li>
                            <li>SKPI dashboard for Terminal Operators abstracting the technology and jargons (AI & Machine Learning).</li>
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
