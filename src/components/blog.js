import React, {Component} from 'react'
export default class Blog extends Component{
    render(){
        return (
            <section className="colorlib-blog" data-section="blog">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Read</span>
                            <h2 className="colorlib-heading">Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg"
                                                                              className="img-responsive"
                                                                              alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div className="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                                        className="icon-bubble3"></i> 4</small></span>
                                    <h3><a href="blog.html">Thổ Nhĩ Kì</a></h3>
                                    <p>Được mệnh danh là “ngã tư các nền văn minh thế giới”, tạo nên sự đa dạng về địa lý, văn hóa, tôn giáo và lối sống.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                            <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/blog-2.jpg"
                                                                              className="img-responsive"
                                                                              alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div className="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i
                                        className="icon-bubble3"/></small></span>
                                    <h3><a href="blog.html">Japan</a></h3>
                                    <p>Đất nước mặt trời mọc hay xứ sở hoa anh đào là những cái tên thân thuộc gần gũi, gợi nhắc về đất nước Nhật Bản.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div className="blog-entry">
                                <a href="blog.html" className="blog-img"><img src="images/blog-3.jpg"
                                                                              className="img-responsive"
                                                                              alt="HTML5 Bootstrap Template by colorlib.com"/></a>
                                <div className="desc">
                                    <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i
                                        className="icon-bubble3"></i> 4</small></span>
                                    <h3><a href="blog.html">Paris, Pháp</a></h3>
                                    <p>Paris chính là thủ đô và cũng là niềm tự hào của nước Pháp, từ lâu đời nay “kinh đô ánh sáng” đã là một trung tâm văn hóa, chính trị và kinh tế của châu Âu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload"></i></a></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}