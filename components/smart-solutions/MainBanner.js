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
                                    <h3>Smart Lockers</h3>
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

                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/visitormanagement.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Visitor Management System</h3><br />
                                    <ul>
                                        <li>Register your visitors with their face or other details</li>
                                        <li>Share the QR code generated with the visitor</li>
                                        <li>Visitor enters the apartment either after his face is matched or after presenting the QR code</li>
                                        <li>Unregistered Visitor? No problem. Get the visitor to talk to the resident using the video call module installed at the guards gate</li>
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
                                    <h3>Common Utility Control</h3><br />
                                    <ul>
                                        <li>Turn on/Turn off common utilities like lights, motor etc remotely</li>
                                        <li>Birds eye view of status of utilities</li>
                                        <li>Monitor energy consumption of common utilities</li>
                                        <li>Save on utility bills by using smart management features built in the app</li>
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
                                            src={require('../../static/images/utility.jpg')}
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
                                            src={require('../../static/images/facility.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h3>Secure Access to Facilities</h3><br />
                                    <ul>
                                        <li>Secure access to facilities using Smart Property App</li>
                                        <li>Provide access using face recognition terminals or simple app based access</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">Download Brochure</a>
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
                                    <h3>Smart Home Solutions</h3><br />
                                    <ul>
                                        <li>Complete home automation solution</li>
                                        <li>Control indoor & outdoor lights, heat, ventilation, air conditioning in the house, lock or open the doors & gates, to control electrical & electronic appliances and so on using various control systems with appropriate sensors. It may also include home security such as access control and alarm systems.</li>
                                        <li><b>CAMO FIT WIFI Hidden Smart Switch </b> - Perfect intelligent control solutions for your home or workplace. It also Fits for various household appliances, such as lamps, washer machine. With the help of CAMO FIT WIFI Hidden Smart Switch we can control our voice and compatible with amazon Alex, Google home, IFTTT. </li>
                                        <li><b>QUICK FIT WIFI & RF Smart Switch </b> - Absolutely secure and perfect combination between the wireless and wired switch. It is Exquisite, elegant and it is thunder and lighting resistance.</li>
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
                                            src={require('../../static/images/home.jpeg')}
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
                                    <h3>Smart Classroom</h3>
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
            </div>
        );
    }
}

export default MainBanner;
