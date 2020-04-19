import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
}


class Partner extends Component {
    render() {
        return (
            <section className="iot-partner-area bg-f9fafb">
                <div className="container">
                    <div className="row">
                        <OwlCarousel 
                            className="repair-partner-slides owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/phenomq.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover1.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/elegante.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover2.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/cpib.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover1.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/cirruslogic.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover10.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/sutd.jpg')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover1.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/alltrace.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover1.png')} alt="image" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-repair-partner">
                                    <a href="#">
                                        <img src={require('../../static/images/partner-img/wizard.png')} alt="image" />
                                        <img src={require('../../static/images/partner-img/partner-hover1.png')} alt="image" />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
