import React, {Component} from 'react'
export default class About extends Component{
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Us</span>
                                        <h2 className="colorlib-heading">What is travel world?</h2>
                                        <p><strong>Hi! Welcome</strong> If you are wondering where to go on vacations or holidays,
                                            TravelWorld will help you to understand clearly about the famous places as well as the culture of the country you choose to enjoy your vacation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-weather-sunny"></i></span>
                                        <h3>Scenery</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-globe-outline"></i></span>
                                        <h3>People</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-data"></i></span>
                                        <h3>Culture</h3>
                                    </div>
                                </div>
                                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-food"></i></span>
                                        <h3>Food</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="hire">
                                        <h2>I am happy to know you <br/>that 3000+ people like Travel world!</h2>
                                        <a href="#" className="btn-hire">Love me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}