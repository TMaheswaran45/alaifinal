import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/alai_logo.png")} alt="logo" width="150px"/>
                                        </a>
                                    </Link>
                                </div>
                                <p>ALAI Labs is an IoT Technology company based in Singapore with a development center in India. <br />At ALAI Labs, we are passionate about developing next-generation Smart property solutions. Our Products are smart and affordable with cognitive capabilities.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>India Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        24, A3, Subhagraha apartments, <br />Balraman St,<br />
                                        Baktavatsalam Nagar, Adyar, Chennai, India
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>info@alai-labs.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>+91-44-4851-8350</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Singapore Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        10 Anson Road, <br />#28-01 International Plaza, <br />Singapore – 079903
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>info@alai-labs.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>+65-8233-6313</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="twitter"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="instagram"><Icon.Instagram /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2020 Alai Technology Labs. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../static/images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}
