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
                            <h1>Paket dan Layanan</h1>
                            <h2>Jika Ingin Memesan Silahkan Contact Kami</h2>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="/bahan/layanan.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Desain Grafis</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Belajar Desain Grafis Tentunya Dengan Harga Terjangkau</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasarnya</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasarnya</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasarnya</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasarnya</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/bahan/des.png" alt="..."/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="">Paket Belajar Pemograman</a></h5>
                                        <p className="card-text">Saya Menyediakan Paket Lengkap Pemograman Web Mulai Dari Dasarnya</p>
                                        <div className="read-more">
                                            <a href="#"><i className="icofont-arrow-right"></i> Read More</a>
                                        </div>
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
                .services {
                    padding-bottom: 40px;
                }
                
                .services .card {
                    border: 0;
                    padding: 0 30px;
                    margin-bottom: 60px;
                    position: relative;
                    background: transparent;
                }
                
                .services .card-img {
                    width: calc(100% + 60px);
                    margin-left: -30px;
                    overflow: hidden;
                    z-index: 9;
                    border-radius: 0;
                }
                
                .services .card-img img {
                    max-width: 100%;
                    transition: all 0.3s ease-in-out;
                }
                
                .services .card-body {
                    z-index: 10;
                    background: #fff;
                    border-top: 4px solid #fff;
                    padding: 30px;
                    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
                    margin-top: -60px;
                    transition: 0.3s;
                }
                
                .services .card-title {
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 20px;
                }
                
                .services .card-title a {
                    color: #213b52;
                    transition: 0.3s;
                }
                
                .services .card-text {
                    color: #5e5e5e;
                }
                
                .services .read-more a {
                    color: #777777;
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 12px;
                    transition: 0.3s;
                }
                
                .services .read-more a:hover {
                    color: #fdc134;
                }
                
                .services .card:hover img {
                    transform: scale(1.1);
                }
                
                .services .card:hover .card-body {
                    border-color: #fdc134;
                }
                
                .services .card:hover .card-body .card-title a {
                    color: #fdc134;
                }
            `}</style>
            </Layout>
            <Footer/>
        </div>
    );
}