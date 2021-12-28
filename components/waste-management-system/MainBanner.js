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
                                        src={require('../../static/images/smart-waste-management.jpg')}
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
                                {/* <p>We really believe Health care is an area where Artificial Intelligence, Machine Learning and Intelligent Vision systems can have great impact. Our solutions are quite intuitive and very affordable even for small or medium sized hospitals. We are working on more exciting solutions. Keep a tab on this page to get to know more.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    {/* <h3>BlueGenie - Smart Health Assistant</h3> */}
                                    Real-time video analytics (Image Processing) to identify the type and criticality of on-road litter. The Video analytics performed with automotive-grade cameras and edge server mounted on the cleaning or inspection vehicle.
                                    <ul>
                                        <li>Model shown for 4-wheeler and 2-wheeler mounting</li>
                                        <li>Special mechanical fixture for easy Plug and Play</li>
                                        <li>Compact housing and easy portable from vehicle to vehicle</li>
                                        <li>Data collection with GPS / Location stamp</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/waste-management1.png')}
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
                                            src={require('../../static/images/waste-management2.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    {/* <h3>Patient Monitoring</h3>
                                    <ul>
                                        <li>Monitor Patient Vitals remotely (Temperature, Pressure) in ICU</li>
                                        <li>Monitor progress of dialysis treatments remotely and avoid frequent trips to the beds</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    Our trained AI model identifies different assets (Footpath, Litter Bin, Turf area, Road Kerb, Turf Area, Drop-Inlet Chamber, Illegal Dumping, Turf Area Lane Closed, Water Channel, Scupper Hole, and Bus Stop) and identify the types of lapses (Dry Leaves, Cigarette butts, Dried Twigs, Plastic wrapper, Used masks, Tissue paper, Silt Deposition Plastic / Glass Bottles Metal Can Cardboard and Branches Palm Fronds) with the percentage of criticality (Clean, Moderate and Critical).
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
                                    {/* <h3>Tele Consultation Platform</h3>
                                    <ul>
                                        <li>With the advent of Covid 19, there has been a lot of need for Tele medicine and consultation</li>
                                        <li>EWe have prtnered with Quapt Technologies to launch a diet consulation plaform. For more details visit oolsum.com</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    Transfer learned Convolution Neural Network (CNN) technique used to train and inference the real-time images of on-road assets (Footpath, Turf area and Road Kerb).
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/waste-management3.png')}
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
                                            src={require('../../static/images/waste-management4.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    {/* <h3>Patient Monitoring</h3>
                                    <ul>
                                        <li>Monitor Patient Vitals remotely (Temperature, Pressure) in ICU</li>
                                        <li>Monitor progress of dialysis treatments remotely and avoid frequent trips to the beds</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    The On-Demand Cleaning system helps efficient deployment of resources to only attend to the areas of concern during cleaning routes, which helps save time for the mobile teams. The primary usage of the data would be to plan an effective On-Demand cleaning schedule for the mobile teams and attend to areas that require cleaning on given days due to environmental and other localized factors. Instant notification is sent to the respective Ops personnel during the identification of critical lapse to follow-up. Every cleaning feedback is linked to a Google map location with the location photo for easy identification and follow-up.
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
                                    {/* <h3>Tele Consultation Platform</h3>
                                    <ul>
                                        <li>With the advent of Covid 19, there has been a lot of need for Tele medicine and consultation</li>
                                        <li>EWe have prtnered with Quapt Technologies to launch a diet consulation plaform. For more details visit oolsum.com</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    <ul>
                                        <li>Vision Based Smart Bin system</li>
                                        <li>IR illuminated & battery pack powered IoT camera, operating with M2M 3G/4G network and connected to ASW Cloud for AI and Analytics</li>
                                        <li>AI backend trained to identify 1000 object categories.</li>
                                        <li>An End-to-End Encrypted communication network is deployed for data integrity.</li>
                                        <li>Based on the identification, the object volume is calculated to identify the level of the bin.</li>
                                        <li>Data aggregation for the volume of trash collection (weekly, monthly, and yearly)</li>
                                        <li>Retrofit into an existing bin.</li>
                                        <li>Less than 2% sensing error compared to convention Ultrasonic level sensor of &gt;40% sensing error.</li>
                                        <li>Geo-location tagging based on QR-code and mobile app</li>
                                        <li>Live Dashboard and Trend Analysis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/waste-management5.png')}
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
                                            src={require('../../static/images/waste-management8.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    {/* <h3>Patient Monitoring</h3>
                                    <ul>
                                        <li>Monitor Patient Vitals remotely (Temperature, Pressure) in ICU</li>
                                        <li>Monitor progress of dialysis treatments remotely and avoid frequent trips to the beds</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    <h5>Trend Analysis parameters:</h5>
                                    <ul>
                                        <li>Type of Litter objects</li>
                                        <li>Object size and volume</li>
                                        <li>Identify Degradable and Non-Degradable objects.</li>
                                        <li>Flammable materials and E-wastes</li>
                                        <li>Metal wastes</li>
                                        <li>Insects and Pests detection</li>
                                        <h5>Trend Analysis parameters:</h5>

                                        <li>Alerts on a bin level 80% and above</li>
                                        <li>Rule-based alerts sent alerts on exceeding a specific category of litter type etc...</li>

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
                                    {/* <h3>Tele Consultation Platform</h3>
                                    <ul>
                                        <li>With the advent of Covid 19, there has been a lot of need for Tele medicine and consultation</li>
                                        <li>EWe have prtnered with Quapt Technologies to launch a diet consulation plaform. For more details visit oolsum.com</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}
                                    <ul>
                                        <li>Periodic cover drain level monitoring system : Constructed with TOF (Time-Of-Flight) IoT device mounted in the field and operates with m1 M2M network (low cost IoT network for light foot print field sensors) to push data to AWS cloud</li>
                                        <li>Regional rainfall data synced from Govt. data portal using Open API. Average rainfall displayed in mm.</li>
                                        <li>Upload Drain cleaning schedule to backend portal in an Excel format.</li>
                                        <li>3-Parameters: Drain level, Average Rainfall, and Cleaning schedule used. The Trend analysis uses the above parameters to compute, Average Rainfall around a specific Drain, Drain Average filling rate, Drain Choke Index, Drain Intake Rate and Critical Alert mechanism</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="repair-banner-image">
                                    <ReactWOW delay='0.6s' animation='zoomIn'>
                                        <img
                                            src={require('../../static/images/waste-management6.png')}
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
                                            src={require('../../static/images/waste-management7.png')}
                                            className="wow zoomIn"
                                            data-wow-delay="0.6s"
                                            alt="image"
                                        />
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="repair-banner-content">
                                    {/* <h3>Patient Monitoring</h3>
                                    <ul>
                                        <li>Monitor Patient Vitals remotely (Temperature, Pressure) in ICU</li>
                                        <li>Monitor progress of dialysis treatments remotely and avoid frequent trips to the beds</li>
                                    </ul>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">For More Information</a>
                                    </Link> */}

                                    <ul>
                                        <li>Average Rainfall: Calculated from Govt. database</li>
                                        <li>Drain Average filling rate: Calculated using level data from Drain sensor</li>
                                        <li>Drain Choke Index: Computed from the cleaning frequency Vs. Drain filling rate</li>
                                        <li>Critical Alert: under two conditions, (1) when the Drain is filled with litter, and (2) no change in level after a rainfall</li>
                                        <li>Choke can be detected in &lt; 4 Hrs.</li>
                                    </ul>

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
