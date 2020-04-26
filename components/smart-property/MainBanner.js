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
                                        src={require('../../static/images/property-banner-1.jpg')}
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
     
                            <p>Alai Labs provides an integrated property management system with multiple modules</p>
                            <p>Building owners or Resident Associations have the option of choosing from these module that would be the most useful to them</p>
                            <p>We also provide complete smart home solutions</p>
                        </div>
                    </div>
                </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h2>Visitor Management System</h2>
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
                                            src={require('../../static/images/barrier.jpg')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    <h2>Automated Vehicle Access System</h2>
                                    <ul>
                                        <li>Register license plates of vehicles of owners in the property</li>
                                        <li>Automatically open gate once plate is recognized</li>
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
                                    <h2>Incident Management System</h2>
                                    <ul>
                                    <li>Snap a incident in your apartment like overflowing garbage, illegal parking and report to management using the app</li>
                                    <li>Track resolution status using the app</li>
                                    <li>Management can view and track all incidents using smart phone</li>
                                    </ul>
                                    <Link href="#">
                                        <a className="btn btn-primary">View More Details</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/incident.jpg')}
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
                                    <h2>Facility Reservation</h2>
                                    <ul>
                                        <li>Check availability of common facilities like Tennis courts, Banquet Halls, Swimming Pool</li>
                                        <li>Reserve your slot online</li>
                                        <li>Enjoy using it</li>
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
                                    <h2>Common Utility Control</h2>
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
                                    <h2>Secure Access to Facilities</h2>
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
                                    <h2>Smart Home Solutions</h2>
                                    <ul>
                                        <li>We provide complete home automation solution</li>
                                        <li>The home automation systems are used for controlling the indoor & outdoor lights, heat, ventilation, air conditioning in the house, to lock or open the doors & gates, to control electrical & electronic appliances and so on using various control systems with appropriate sensors. It may also include home security such as access control and alarm systems.</li>
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
                                            src={require('../../static/images/utility.jpg')}
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
