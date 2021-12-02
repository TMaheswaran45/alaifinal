import React from 'react'
import * as Icon from 'react-feather'
import ReactWOW from 'react-wow'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'


export default function HrmFeaturesContent() {
    return (
        <React.Fragment>
            <section className="features-details-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="repair-banner-content">
                                <h4>Why ALAI HRM ?</h4>
                                <p>Let our HRM software handle your HR problems while you take care of your employees</p>

                            </div>
                        </div>
                    </div>
                <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img
                                src={require('../../static/images/hr2.jpg')}
                                className="wow zoomIn"
                                data-wow-delay="0.6s"
                                alt="image" height="1200px" width="600px"
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>Benefit of HRM</h3>
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
                                </ul>*/}
                            </div>
                        </div>
                    </div>

                    {/*<div className="separate"></div>*/}

                </div>

            </section>

            {/* <!-- 9 features or CRM --> */}
            <section className="features-area ptb-80 bg-f9f6f6">
                <div className="container">


                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Settings />
                                </div>

                                <h6>Effective new hire onboarding</h6>
                                <p>
                                    <ul>
                                        <li>Interactive welcome wall </li>
                                        <li>Customizable new hire forms </li>
                                        <li>Easy assigning of tasks, training and goals</li>
                                        <li>Employee socialization to help understand the organizational culture</li>
                                    </ul>
                                </p>
                                <p><br/></p>
                                <p><br/></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon">
                                    <Icon.Database />
                                </div>

                                <h6>Centralized Employee Database</h6>
                                <p>
                                    <ul>
                                        <li>Employee management from a centralized location</li>
                                        <li>Reduced errors and elimination of redundant data entry</li>
                                        <li>Access to complete employee information anywhere, anytime</li>
                                        <li>Quick employee search based on required criteria</li>
                                    </ul>
                                </p>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Grid />
                                </div>

                                <h3>Employee Self-service</h3>
                                <p><ul>
                                    <li>Let your employees access, update and modify their own data</li>
                                    <li>Access to attendance and leave reports</li>
                                    <li>Log time on jobs</li>
                                    <li>Apply Leave</li>
                                </ul>
                                </p>
                                
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-c679e3">
                                    <Icon.Square />
                                </div>

                                <h3>Easy to use Timesheets</h3>
                                <p><ul>
                                    <li>Easy scheduling of jobs & work items </li>
                                    <li>Recording job entries on a daily, weekly & monthly basis </li>
                                    <li>Log both billable & non-billable hours</li>
                                    <li>Clear and accurate visual reports for analysis and forecasting</li>
                                </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Cast />
                                </div>

                                <h3>Attendance Management</h3>
                                <p><ul>
                                    <li>Intuitive web & mobile check-in and check-out</li>
                                    <li>Customizable leave and attendance settings</li>
                                    <li> API to integrate the attendance system with the attendance Terminals </li>
                                    <li>Multiple shifts, Ip restrictions, user id & shift mapping </li>
                                    <li>Geo-tracking of check-in and check-out at different locations</li>
                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Command />
                                </div>

                                <h6>Employee Collaboration & Live Feeds</h6>
                                <p><ul>
                                    <li>Instant notifications of company announcements and other information </li>
                                    <li>Real-time alerts and timely updates</li>
                                    <li>Improved decision making with increased employee collaboration</li>
                                </ul>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.PieChart />
                                </div>

                                <h3>Performance Management</h3>
                                <p><ul>
                                    <li>360-degree feedback throughout the year </li>
                                    <li>Goal setting and tracking </li>
                                    <li>Employee self-appraisal </li>
                                    <li>Performance Reports to help management appraise </li>
                                    <li>Employees Analytics for insights into overall performance of teams</li>
                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.PhoneCall />
                                </div>

                                <h3>HRM Mobile</h3>
                                <p><ul>
                                    <li>Flexible and intuitive mobile check-in and check-out</li>
                                    <li>Perform quick employee search using tags and other criteria </li>
                                    <li>Call, text and email employees directly from your device</li>
                                    <li>View the departments in your organization and it's members</li>

                                </ul></p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="single-features">
                                <div className="icon bg-eb6b3d">
                                    <Icon.Shuffle />
                                </div>

                                <h3>Intelligent workflow automation </h3>
                                <p><ul>
                                    <li>Automatic mail alerts for improved workflow </li>
                                    <li>Configuration of multi-level approvals </li>
                                    <li>Checklists to track tasks and everything that needs to be done </li>
                                    <li>Reminders for key events such as appraisals, probation Reviews, birthdays and much more</li>
                                </ul></p>
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
