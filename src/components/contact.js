import React, {Component} from 'react'
import * as Configs from '../config'

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {submitted:false, submitResult: true, name: "", email:"", subject:"", message:""};
    }
    submitHandler = (event)=>{
        event.preventDefault();
        this.submit();
    };

    submit(){
        fetch(Configs.API_ROOT + Configs.API_PATH_ENUM.POST_MESSAGE, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            })
        }).then((response) => response.json())
            .then((json) => {
                this.setState( {submitted: true, submitResult: true});
            })
            .catch((error) => {
                this.setState( {submitted: true, submitResult: false});
            });
    };

    changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };
    render(){
        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className={ this.state.submitted && this.state.submitResult ? "alert alert-success alert-dismissible": "alert alert-success hidden"}>
                            <strong>Success!</strong> Thank you for your message. We will call you soon.
                        </div>
                        <div className={ this.state.submitted && this.state.submitResult ? "alert alert-warning": "alert alert-warning hidden"}>
                            <strong>Fail!</strong> System got some problem. Please contact us directly by email.
                        </div>
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-globe-outline"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="#">info@domain.com</a></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-map"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://">+123 456 7890</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-md-push-1">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                                     data-animate-effect="fadeInRight">
                                    <form action="" onSubmit={this.submitHandler} className='was-validated'>
                                        <div className="form-group">
                                            <input name="name" onChange={this.changeHandler} className="form-control" placeholder="Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <input name="email" onChange={this.changeHandler} className="form-control" placeholder="Email" required/>
                                        </div>
                                        <div className="form-group">
                                            <input name="subject" onChange={this.changeHandler} className="form-control" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" onChange={this.changeHandler} id="message" cols="30" rows="7" className="form-control"
                                                      placeholder="Message" required></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary btn-send-message"
                                                   value="Send Message"/>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}