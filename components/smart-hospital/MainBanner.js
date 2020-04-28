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
                                        src={require('../../static/images/health-banner-1.webp')}
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

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h1>Smart Health Assistant</h1>
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
                                            src={require('../../static/images/healthcare_assistant.jpg')}
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
                                            src={require('../../static/images/patient_monitor.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h1>Patient Monitoring</h1>
                                    <ul>
                                        <li>Enable access to your employees using face recognition</li>
                                        <li>Automatically check temperature on entry and stop access if temperature is beyond threshold</li>
                                        <li>Automatically check for sickness based on emotions and alert accordingly</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
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
                                    <h1>Tele Consultation Platform</h1>
                                    <ul>
                                        <li>Select and reserve meeting rooms based on availability</li>
                                        <li>Enable access based on QR Code / Biometrics</li>
                                        <li>Automatically turn on / off utilities in meeting room based on schedule</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/tele-consult.jpg')}
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
            </div>
        );
    }
}

export default MainBanner;
