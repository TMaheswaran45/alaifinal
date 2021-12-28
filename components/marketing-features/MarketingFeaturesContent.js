import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'


export default function MarketingFeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-details-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ">
                            <div className="repair-banner-content">
                                <h4>What is Marketing Management?</h4>
                                <p>That software helps you manage your marketing activities successfully across multiple brands Like Social media, Email marketing, Survey & etc.. & Channels </p>

                            </div>

                            <div className="repair-banner-content">
                                <h4>Why ALAI Marketing Management?</h4>
                                <p>Marketing software is a very important tools because it helps to promote your business day to day marketing activities such as create brand awareness and to make your business stand out. Without marketing software, your business doesn't have a voice and you can't reach out and connect with people.</p>
                            </div>

                        </div>
                        <div className="col-lg-6 features-details-image">
                            <img
                                src={require('../../static/images/marketing-sq.jpg')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image"
                            />
                        </div>

                    </div>
                    <div className="separate"></div>


                    <div className="row align-items-center">
                        <div className="col-lg-12 features-details-image">
                            <img
                                src={require('../../static/images/marketing-chart.png')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image" height="850px" width="600px"
                            />
                            <div className="separate"></div>
                        </div>

                        {/*<div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Benefit of CRM</h3>
                                <p> ● Create effective email campaigns to reach and interact with your customer. <br />
                                    ● Proactively chat with your website visitors and convert them into potential customer. <br />
                                    ● Create, schedule and deliver your social media content where your audiences are most likely to engage. <br />
                                    ● Manage your sales pipeline, spot opportunities, increase win rates and grow your business. <br />
                                    ● Provide unmatched customer service across multiple channels, languages and time zones. <br />
                                    ● Plan, track and collaborate on client deliverables using our project management tools. <br />
                                    ● Gain data-driven insights on your sales performance with smart dashboards and KPIs. <br />
                                    ● Gather opinions, analyze results and discover better ways to exceed customer expectations. <br />
                                </p>

                                {/* <ul className="features-details-list">
                                    <li>Create effective email campaigns to reach and interact with your customer.</li>
                                    <li>Proactively chat with your website visitors and convert them into potential customer.</li>
                                    <li>Create, schedule and deliver your social media content where your audiences are most likely to engage.</li>
                                    <li>Manage your sales pipeline, spot opportunities, increase win rates and grow your business.</li>
                                    <li>Provide unmatched customer service across multiple channels, languages and time zones.</li>
                                    <li>Plan, track and collaborate on client deliverables using our project management tools.</li>
                                    <li>Gain data-driven insights on your sales performance with smart dashboards and KPIs.</li>
                                    <li>Gather opinions, analyze results and discover better ways to exceed customer expectations.</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>

                    {/*<div className="separate"></div>*/}

                </div>

            </section>

            {/* <!-- 9 features or CRM --> */}
            <section className="features-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <h4>Features & Benefits of Marketing Management: </h4>

                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Mail />
                                </div>

                                <h3>Email Campaigns</h3>

                                <ul>
                                    <li>Contact management</li>
                                    <li>Customizable email templates</li>
                                    <li>Automate your email marketing efforts</li>
                                    <li>Real-time email analytics</li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Users />
                                </div>

                                <h3>Survey System</h3>

                                <ul>
                                    <li>Create and customize</li>
                                    <li>Send surveys via various ways</li>
                                    <li>Collect responses</li>
                                    <li>Analyze reports</li>
                                </ul>

                                <p><br /></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>

                                <h3>Social Network Marketing</h3>
                                <ul>
                                    <li>Plan, Schedule, and Publish</li>
                                    <li>Monitor everything across channels</li>
                                    <li>Collaborate with Team</li>
                                    <li>Approve content before publishing</li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Monitor />
                                </div>

                                <h3>Webpage monitor – Page Sense</h3>
                                <ul>
                                    <li>Track website metrics</li>
                                    <li>Analyze visitor behavior</li>
                                    <li>Optimize website</li>
                                    <li>Personalize the website</li>
                                    <li>Engage with customers</li>
                                </ul>

                            </div>
                        </div>



                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Activity />
                                </div>

                                <h3>Automate Marketing Activities</h3>
                                <ul>
                                    <li>Personalized journeys</li>
                                    <li>Lead management</li>
                                    <li>Behavioral marketing</li>
                                    <li>Multichannel marketing</li>
                                    <li>Advanced analytics</li>

                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Database />
                                </div>

                                <h3>Business Data & Analytics</h3>
                                <ul>
                                    <li>Import your data</li>
                                    <li>Visualize your data</li>
                                    <li>Share and communicate with your team</li>
                                </ul>

                                <p><br /></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Film />
                                </div>

                                <h3>Webinars (Engage Audience)</h3>

                                <ul>
                                    <li>Create and manage webinars</li>
                                    <li>Present to a wide audience</li>
                                    <li>Engage your audience Easily</li>
                                    <li>Analyze and follow up </li>
                                </ul>

                                <p><br /></p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Anchor />
                                </div>

                                <h3>Event Management (Plan & Execute)</h3>
                                <ul>
                                    <li>Planning and Organizing event</li>
                                    <li>Collaborating with the team members</li>
                                    <li>Managing sponsors</li>
                                    <li>event ticketing (paid Available)</li>
                                    <li>Able to create a virtual event On Air</li>

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
