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
                                        src={require('../../static/images/city-banner-1.jpg')}
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
                            <p>Cities of the future are going to be smart. Alai has a variety of offerings for the smart city like smart lockers, bins, face recognition and thermal imaging systems, LoRaWAN based modules to control public utilities etc. Aside to this, we can stitch together a lot of solutions for smart city using our well architected building blocks.</p>
                        </div>
                    </div>
                </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h2>Smart Lockers</h2>
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
                            <div className="col-lg-6"><br /><br /></div>
                            <div className="col-lg-6"><br /><br /></div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">

                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/thermal.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h2>Thermal Scanning & Social Distancing Enforcement</h2>
                                    <ul>
                                        <li>Alert if someone has a fever while entering the premises</li>
                                        <li>Ensure social distancing by using buzzers when its not followed</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Know More</a>
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
                                    <h2>Smart Waste Management</h2>
                                    <ul>
                                        <li>Automatically Notify garbage collection team for collection of filled trash cans </li>
                                        <li>Alert mainenance team as soon as the recycle bin is filled to a certain extent</li>
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
                                            src={require('../../static/images/smartbin.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
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
                                            src={require('../../static/images/smartclass.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h2>Smart Classroom</h2>
                                    <ul>
                                        <li>Check and alert malpractices during examinations using smart camera</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Know More</a>
                                    </Link>
                                </div>
                            </div>


                        </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;
