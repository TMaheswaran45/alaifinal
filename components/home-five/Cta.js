import React, { Component } from 'react';
import Link from 'next/link';


class Cta extends Component {
    render() {
        return (
            <section className="repair-banner-content">
                <div className="container-fluid bg-f9fafb">
                    <div className="row align-items-center">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="cta-repair-img">
                                {/* <img
                                    src={require('../../static/images/banner-bg2.jpg')}
                                   
                                />  */}

                                <div className="cta-repair-content p-5">
                                    <h3 class="text-left">Reach us to discover new possibilities</h3>
                                    <p class="text-justify">The solutions we have developed till now are just the tip of the iceberg. The possibilities IoT offers are limitless. our team with a very diversified skillset can offer you simple and realistic solutions to your needs. Please reach out to us to see how we can be of assistance. You would sure not regret it.</p>
                                    <Link href="/contact?style=default">
                                        <div class="text-left">
                                            <a className="btn btn-primary" >Contact Us</a>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <div>

                                {/* <img src={require('../../static/images/meetus.jpg')}  />  */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;
