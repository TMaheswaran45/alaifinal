import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class Services extends Component {
    render() {
        return (
            <section className="iot-services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Futuristic Solutions we have delivered</h2>
                        <div className="bar"></div>
                        <p>The last 4 years our team has been at work on creating top of the class solutions for multiple domains and deployed across the world </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg1">
                                <div className="icon">
                                    <i className="flaticon-software"></i>
                                </div>

                                <h3>Smart Offices</h3>
                                <p>Attendance, Meeting room booking based on Face recognition, QR Code</p>
                                <Link href="/smart-office?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg2">
                                <div className="icon">
                                    <i className="flaticon-gear"></i>
                                </div>

                                <h3>Smart Property</h3>
                                <p>Smart homes, Visitor Management, Security Cameras</p>
                                
                                <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg3">
                                <div className="icon">
                                    <i className="flaticon-skyline"></i>
                                </div>

                                <h3>Smart City</h3>
                                <p>Smart Bin, Smart Lockers, Traffic signal Management</p>
                                
                                <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg4">
                                <div className="icon">
                                    <i className="flaticon-car-insurance"></i>
                                </div>

                                <h3>Smart Hospitals</h3>
                                <p>Automatic Attendance and Body temperature check</p>
                                
                                <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg5">
                                <div className="icon">
                                    <i className="flaticon-factory"></i>
                                </div>

                                <h3>Smart Port</h3>
                                <p>Container and Vehicle movement, Productivity measurement</p>
                                <Link href="/smart-port?style=default">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-repair-services bg6">
                                <div className="icon">
                                    <i className="flaticon-chip"></i>
                                </div>

                                <h3>Software Development</h3>
                                <p>App Development, Data analytics, Machine Learning</p>
                                
                                <Link href="#">
                                    <a><Icon.ArrowRight /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
