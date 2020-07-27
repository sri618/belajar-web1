import Header from '../component/header';
import Layout from '../component/layout';
import Footer from '../component/footer';

export default ()=>{
    return(
        <div>
            <Header/>
            <Layout>
            <section id="hero">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h1>Watch Tutorial</h1>
                            <h2>Jika Belum Paham Silahkan Lihat Video Di Bawah Ini</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="/bahan/qw.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <iframe width="660" height="auto" className="img-fluid" src="https://www.youtube.com/embed/1umcXyPBJAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="portfolio-links">
                                        <a href="/bahan/4.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Tutorial</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <iframe width="660" height="315" className="img-fluid" src="https://www.youtube.com/embed/ydg-uFtsfI4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="portfolio-links">
                                        <a href="/bahan/4.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Tutorial</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <iframe width="560" height="315" className="img-fluid" src="https://www.youtube.com/embed/BfwEPIOKTsg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="portfolio-links">
                                        <a href="/bahan/4.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Tutorial</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <style jsx>{`
                #hero {
                    width: 100%;
                    padding: 0 0 0 0;
                    background: #800000;
                    background: linear-gradient(180deg, #800000 0%, #800002 35%, #800012 100%);
                }
                
                #hero h1 {
                    margin: 0 0 15px 0;
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 56px;
                    color: #FFFFFF;
                    font-family: Verdana;
                }
                
                #hero h2 {
                    color: #FFFFFF;
                    margin-bottom: 30px;
                    font-size: 22px;
                }
                
                #hero .btn-get-started {
                    color: #FFFFFF;
                    border-radius: 50px;
                    padding: 8px 35px 10px 35px;
                    border: 2px solid #FFFFFF;
                    transition: all ease-in-out 0.3s;
                    display: inline-block;
                    background: #800000;
                }
                
                #hero .btn-get-started:hover {
                    background: transparent;
                    color: #DC143C;
                }
                
                @media (max-width: 991px) {
                    #hero .hero-img {
                        text-align: center;
                    }
                    #hero .hero-img img {
                        width: 50%;
                    }
                }
                
                @media (max-width: 768px) {
                    #hero {
                        -moz-text-align-last: center;
                        text-align-last: center;
                    }
                    #hero h1 {
                        font-size: 28px;
                        line-height: 36px;
                    }
                    #hero h2 {
                        font-size: 18px;
                        line-height: 24px;
                        margin-bottom: 30px;
                    }
                    #hero .hero-img img {
                        width: 70%;
                    }
                }
                
                @media (max-width: 575px) {
                    #hero .hero-img img {
                        width: 80%;
                    }
                }
                section {
                    padding: 60px 0;
                    overflow: hidden;
                  }
                  
                .section-bg {
                    background: linear-gradient(180deg, #f2f6fa 0%, #fff 100%);
                }
                
                .section-title {
                    text-align: center;
                    padding-bottom: 30px;
                }
                
                .section-title h2 {
                    font-size: 32px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    position: relative;
                    font-family: "Poppins", sans-serif;
                    color: #213b52;
                }
                
                .section-title h2::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 120px;
                    height: 1px;
                    background: #ddd;
                    bottom: 1px;
                    left: calc(50% - 60px);
                }
                
                .section-title h2::after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 40px;
                    height: 3px;
                    background: #fdc134;
                    bottom: 0;
                    left: calc(50% - 20px);
                }
                
                .section-title p {
                    margin-bottom: 0;
                }
                .portfolio .portfolio-item {
                    margin-bottom: 30px;
                }
                
                .portfolio #portfolio-flters {
                    padding: 0;
                    margin: 0 0 35px 0;
                    list-style: none;
                    text-align: center;
                }
                
                .portfolio #portfolio-flters li {
                    cursor: pointer;
                    margin: 0 5px 5px 0;
                    display: inline-block;
                    padding: 10px 15px;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 20px;
                    color: #444444;
                    margin-bottom: 5px;
                    transition: all 0.3s ease-in-out;
                }
                
                .portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
                    color: #fdc134;
                }
                
                .portfolio #portfolio-flters li:last-child {
                    margin-right: 0;
                }
                
                .portfolio .portfolio-wrap {
                    transition: 0.3s;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    z-index: 1;
                }
                
                .portfolio .portfolio-wrap::before {
                    content: "";
                    background: rgba(33, 59, 82, 0.6);
                    position: absolute;
                    left: 100%;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    transition: all ease-in-out 0.3s;
                    z-index: 2;
                }
                
                .portfolio .portfolio-wrap img {
                    transition: 0.3s;
                }
                
                .portfolio .portfolio-wrap .portfolio-links {
                    opacity: 0;
                    left: 0;
                    right: 0;
                    top: calc(50% - 36px);
                    text-align: center;
                    z-index: 3;
                    position: absolute;
                    transition: all ease-in-out 0.3s;
                }
                
                .portfolio .portfolio-wrap .portfolio-links a {
                    color: #fdc134;
                    font-size: 24px;
                    line-height: 1;
                    text-align: center;
                    width: 36px;
                    height: 36px;
                    display: inline-block;
                    transition: 0.3s;
                }
                
                .portfolio .portfolio-wrap .portfolio-links a:hover {
                    color: #fff;
                }
                
                .portfolio .portfolio-wrap .portfolio-info {
                    opacity: 0;
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    z-index: 3;
                    transition: all ease-in-out 0.3s;
                }
                
                .portfolio .portfolio-wrap .portfolio-info h4 {
                    font-size: 20px;
                    color: #fff;
                    font-weight: 600;
                }
                
                .portfolio .portfolio-wrap .portfolio-info p {
                    color: #ffffff;
                    font-size: 14px;
                    text-transform: uppercase;
                }
                
                .portfolio .portfolio-wrap:hover::before {
                    left: 0;
                }
                
                .portfolio .portfolio-wrap:hover .portfolio-links {
                    opacity: 1;
                    top: calc(50% - 18px);
                }
                
                .portfolio .portfolio-wrap:hover .portfolio-info {
                    opacity: 1;
                    bottom: 0;
                }
                
                .portfolio-details {
                    padding-top: 30px;
                }
                
                .portfolio-details .portfolio-details-container {
                    position: relative;
                }
                
                .portfolio-details .portfolio-details-carousel {
                    position: relative;
                    z-index: 1;
                }
                
                .portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
                    margin-top: 5px;
                    text-align: left;
                }
                
                .portfolio-details .portfolio-details-carousel .owl-dot {
                    display: inline-block;
                    margin: 0 10px 0 0;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: #ddd !important;
                }
                
                .portfolio-details .portfolio-details-carousel .owl-dot.active {
                    background-color: #fdc134 !important;
                }
                
                .portfolio-details .portfolio-info {
                    padding: 30px;
                    position: absolute;
                    right: 0;
                    bottom: -70px;
                    background: #fff;
                    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
                    z-index: 2;
                }
                
                .portfolio-details .portfolio-info h3 {
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #eee;
                }
                
                .portfolio-details .portfolio-info ul {
                    list-style: none;
                    padding: 0;
                    font-size: 15px;
                }
                
                .portfolio-details .portfolio-info ul li + li {
                    margin-top: 10px;
                }
                
                .portfolio-details .portfolio-description {
                    padding-top: 50px;
                }
                
                .portfolio-details .portfolio-description h2 {
                    width: 50%;
                    font-size: 26px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                
                .portfolio-details .portfolio-description p {
                    padding: 0 0 0 0;
                }
                
                @media (max-width: 768px) {
                    .portfolio-details .portfolio-description h2 {
                        width: 100%;
                    }
                    .portfolio-details .portfolio-info {
                        position: static;
                        margin-top: 30px;
                    }
                }
            `}</style>
            </Layout>
            <Footer/>
        </div>
    );
}