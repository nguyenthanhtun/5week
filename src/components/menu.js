import React, {Component} from 'react'
export default class Menu extends Component{
    render(){
        return (
         <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
                <h1 id="colorlib-logo"><a href="index.html">Travel World.com</a></h1>
                <span className="position"><a href="#">Travel Location</a> from all over the world</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                        <li><a href="#" data-nav-section="about">About</a></li>
                        <li><a href="#" data-nav-section="location">Work</a></li>
                        <li><a href="#" data-nav-section="blog">Blog</a></li>
                        <li><a href="#" data-nav-section="contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="colorlib-footer">
                <p><small>&copy; {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/} <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
            <ul>
                <li><a href="#"><i className="icon-facebook2"></i></a></li>
                <li><a href="#"><i className="icon-twitter2"></i></a></li>
                <li><a href="#"><i className="icon-instagram"></i></a></li>
                <li><a href="#"><i className="icon-linkedin2"></i></a></li>
            </ul>
        </div>

        </aside>
        );
    }
}