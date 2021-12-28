import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'


export default function FinanceInventoryFeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-details-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <h4>Why is ALAI Inventory management?</h4>
                                <p>Alai Inventory management software helps to monitor, manage and control your inventories with ease</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 text-center">
                        <h4>Benefit of Inventory management</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">

                            <img
                                src={require('../../static/images/Inventory-management.jpg')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image"
                            />

                        </div>

                        <div className="col-lg-3 features-details mt-2">
                            <div className="features-details-desc">

                                <ul>
                                    <li>  Inventory Control</li>
                                    <li>  Inventory Management</li>
                                    <li>  Warehouse Management</li>
                                    <li>  Multichannel Selling</li>
                                    <li>  Order Management</li>
                                    <li>  Order Fulfillment</li>
                                    <li>  Reports</li>
                                    <li>  Sales Reports</li>
                                    <li>  Multi-Currency</li>
                                    <li>  FIFO Tracking</li>
                                    <li>  Automated Re-ordering</li>
                                    <li>  Stock Adjustment</li>
                                    <li>  Barcode Inventory Management</li>
                                    <li>  Serial Number Tracking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 features-details mt-1">
                            <div className="features-details-desc">
                                <h3></h3>
                                <ul>
                                    <li>Batch and Expiry Date Tracking</li>
                                    <li>Order Transfer Tracking</li>
                                    <li>Channel Performance Measurement</li>
                                    <li>Payment Gateways</li>
                                    <li>Automatic Packing Slips</li>
                                    <li>Dashboards</li>
                                    <li>Shipping Labels and Real-Time Rates</li>
                                    <li>Post-Shipment Update</li>
                                    <li>Drop shipping</li>
                                    <li>Purchase Reports</li>
                                    <li>Product Listing</li>
                                    <li>Item Kitting</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="separate"></div>
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <h4>Why is ALAI Finance management?</h4>
                                <p>Alai Inventory management software helps to monitor, manage and control your inventories with ease</p>
                            </div>
                        </div>


                    </div>
                    {/*<div className="separate"></div>*/}
                    <div className="row align-items-center">
                        <div className="col-lg-12 features-details-image">
                            <img
                                src={require('../../static/images/finance-banner.jpg')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image" height="500px" width="1200px"
                            />
                        </div>


                    </div>
                </div>

            </section>

            {/* <!-- 9 features or CRM --> */}
            <section className="features-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>
                                <h3>Invoice Software</h3>

                                <ul>
                                    <li>Customizable invoices using templates</li>
                                    <li>Project management and time tracking</li>
                                    <li>Receive online payments</li>
                                </ul>

                                <p><br /></p>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Analytics</h3>

                                <ul>
                                    <li>Recurring payments & accounting </li>
                                    <li>Subscription metrics & reports</li>
                                    <li>Subscription automation </li>
                                    <li>See real-time subscription metrics</li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>
                                <h3>Expense</h3>
                                <ul>
                                    <li>Make online and offline travel arrangements</li>
                                    <li>Automate expense reporting</li>
                                    <li>Customize the app</li>
                                </ul>

                                <p><br /></p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Checkout Process</h3>

                                <ul>
                                    <li>Customizable invoices using templates</li>
                                    <li>Project management and time tracking</li>
                                    <li>Subscription automation</li>
                                    <li>Receive online payments</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- End Features Area --> */}

            {/* <!-- Start Features Area --> */}
            {/* <section className="features-area-two ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Experience The Best Features Ever</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Lock /> Secure & Fast
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Watch /> Rich experience
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Users /> Support Stuffs
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.TrendingUp /> Forex trading
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Folder /> File backups
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Monitor /> Remote desktop
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Mail /> Email servers
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Cloud /> Hybrid cloud
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-right-image">
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../static/images/services-right-image/book-self.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" alt="book-self" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/box.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="box" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../static/images/services-right-image/chair.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="chair" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/cloud.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cloud" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='bounceIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/cup.png")} 
                                        className="wow bounceIn" 
                                        data-wow-delay="0.6s" 
                                        alt="cup" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInDown'>
                                    <img 
                                        src={require("../../static/images/services-right-image/flower-top.png")} 
                                        className="wow fadeInDown" 
                                        data-wow-delay="0.6s" 
                                        alt="flower" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/head-phone.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="head-phone" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/monitor.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="monitor" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='rotateIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/mug.png")} 
                                        className="wow rotateIn" 
                                        data-wow-delay="0.6s" 
                                        alt="mug" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInUp'>
                                    <img 
                                        src={require("../../static/images/services-right-image/table.png")} 
                                        className="wow fadeInUp" 
                                        data-wow-delay="0.6s" 
                                        alt="table" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/tissue.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="tissue" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='zoomIn'>
                                    <img 
                                        src={require("../../static/images/services-right-image/water-bottle.png")} 
                                        className="wow zoomIn" 
                                        data-wow-delay="0.6s" 
                                        alt="water-bottle" 
                                    />
                                </ReactWOW>
                                <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                    <img 
                                        src={require("../../static/images/services-right-image/wifi.png")} 
                                        className="wow fadeInLeft" 
                                        data-wow-delay="0.6s" 
                                        alt="wifi" 
                                    />
                                </ReactWOW>
                            <img 
                                src={require("../../static/images/services-right-image/cercle-shape.png")} 
                                className="bg-image rotateme" 
                                alt="shape" 
                            />
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-right-image/service-right-main-pic.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="main-pic" 
                                />
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>*/}
            {/* <!-- End Features Area --> */}

            {/* <!-- Start Features Area --> */}
            {/*<section className="features-area-two ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        {/*<div className="col-lg-6 col-md-12 services-left-image">
                            <ReactWOW delay='0.6s' animation='fadeInDown'>
                                <img 
                                    src={require("../../static/images/services-left-image/big-monitor.png")} 
                                    className="wow fadeInDown" 
                                    data-wow-delay="0.6s" 
                                    alt="big-monitor" 
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/creative.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="creative" 
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInLeft'>
                                <img 
                                    src={require("../../static/images/services-left-image/developer.png")} 
                                    className="wow fadeInLeft" 
                                    data-wow-delay="0.6s" 
                                    alt="developer"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/flower-top.png")} 
                                    className="wow zoomIn" 
                                    data-wow-delay="0.6s" 
                                    alt="flower-top"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='bounceIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/small-monitor.png")} 
                                    className="wow bounceIn" 
                                    data-wow-delay="0.6s" 
                                    alt="small-monitor"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInDown'>
                                <img 
                                    src={require("../../static/images/services-left-image/small-top.png")} 
                                    className="wow fadeInDown" 
                                    data-wow-delay="0.6s" 
                                    alt="small-top"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='zoomIn'>
                                <img 
                                    src={require("../../static/images/services-left-image/table.png")} 
                                    className="wow zoomIn" 
                                    data-wow-delay="0.6s" 
                                    alt="table"
                                />
                            </ReactWOW>
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/target.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="target"
                                />
                            </ReactWOW>
                        
                            <img 
                                src={require("../../static/images/services-left-image/cercle-shape.png")} 
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                            <ReactWOW delay='0.6s' animation='fadeInUp'>
                                <img 
                                    src={require("../../static/images/services-left-image/service-left-main-pic.png")} 
                                    className="wow fadeInUp" 
                                    data-wow-delay="0.6s" 
                                    alt="main-pic"
                                />
                            </ReactWOW>
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>What Our Software Can Do For You</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Layout /> Responsive design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> React web development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> Android apps development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Code /> Laravel web development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Smartphone /> iOS apps development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Percent /> UX/UI design
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.ShoppingCart /> E-commerce development
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.CheckCircle /> Print ready design
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}
        </React.Fragment>
    )
}
